import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  // GSAP animation for the SVG mask
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // GSAP mouse move animation

  useGSAP(() => {

    if(!showContent) return;

    gsap.to(".main", {
      scale:1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    gsap.to(".imagesdiv .sky", {
      scale:1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".imagesdiv .bg", {
      scale:1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".imagesdiv .character", {
      scale:1.3,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })
    // gsap.to(".imagesdiv .text", {
    //   rotate: 0,
    //   duration: 2,
    //   delay: "-.8",
    //   ease: "Expo.easeInOut",
    // })

    // gsap.to("")
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".imagesdiv .sky", {
        x: xMove,
      });
      gsap.to(".imagesdiv .bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] flex items-center justify-center w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="250"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.3]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* navbar */}
            <div className="navbar w-full py-8 px-10 absolute top-0 left-0 z-[10]">
              <div className="logo flex items-center gap-7">
                <div className="lines flex flex-col gap-[6px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white">Rockstar</h3>
              </div>
            </div>
            {/* main content */}
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="sky absolute rotate-[-15deg] top-0 left-0 w-full scale-[1.2] h-screen object-cover"
                src="./sky.png"
                alt="sky"
              />
              <img
                className="absolute bg rotate-[-3deg] scale-[1.2] top-0 left-0 w-full h-screen object-cover"
                src="./bg.png"
                alt="bg"
              />

              <div className="text text-white absolute top-0 left-1/2 -translate-x-1/2">
                <h1 className="text-[8rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem] leading-none ml-10">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-20">auto</h1>
              </div>

              <img
                className="absolute character -bottom-[70%] rotate-[-20deg] scale-[1.2] left-1/2 -translate-x-1/2 h-screen object-cover"
                src="./girlbg.png"
                alt="bg"
              />
            </div>
            {/* bottom bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-xl ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full h-screen flex px-10 items-center justify-center bg-black">
            <div className="contain flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 scale-[0.8] -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt="imag"
                />
              </div>

              <div className="rg w-[30%]">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum tenetur, modi architecto natus, consequatur nesciunt,
                  repellat quia.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempore quas laborum eveniet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  tempore quas laborum eveniet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
                 <button className="bg-yellow-500 px-5 mt-10 py-5 text-3xl text-black cursor-pointer">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
