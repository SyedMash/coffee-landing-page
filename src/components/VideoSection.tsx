"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
1
  useGSAP(
    () => {
      if (!isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".vd-pin-section",
            start: "-15% top",
            end: "200% top",
            scrub: 1.5,
            markers: true,
            pin: true,
          },
        });

        tl.to(".video-box", {
          clipPath: "circle(100% at 50% 50%)",
          ease: "power1.inOut",
        });
      }
    },
    { scope: videoRef }
  );

  return (
    <section className="vd-pin-section" ref={videoRef}>
      <div
        className="size-full video-box"
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(10% at 50% 50%)",
        }}
      >
        <video src="/videos/pin-video.mp4" autoPlay loop muted playsInline />
        <div className="abs-center md:scale-100 scale-200">
          <img
            src="/images/circle-text.svg"
            alt="circle-text-svg"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt="play-btn"
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
