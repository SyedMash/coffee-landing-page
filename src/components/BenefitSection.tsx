"use client";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

import ClipPathTitle from "./ClipPathTitle";
import VideoSection from "./VideoSection";

const BenefitSection = () => {
  const benefitRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".benefit-section",
          start: "top 60%",
          end: "top top",
          scrub: 1.5,
        },
      });

      [".first-title", ".second-title", ".third-title", ".fourth-title"].map(
        (title) =>
          revealTl.to(title, {
            duration: 1,
            opacity: 1,
            ease: "circ.out",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          })
      );
    },
    { scope: benefitRef }
  );

  return (
    <section className="benefit-section" ref={benefitRef}>
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="font-sans">
            unlock the advantages <br /> explore the key benefits of choosing
            SPYLT
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title="Shief Stable"
              color="#faeade"
              bg="#c88e64"
              borderColor="#222123"
              className="first-title"
            />
            <ClipPathTitle
              title="Protein + Caffeine"
              color="#222123"
              bg="#faeade"
              borderColor="#222123"
              className="second-title"
            />
            <ClipPathTitle
              title="Infinitely Recyclable"
              color="#faeade"
              bg="#7f3b2d"
              borderColor="#222123"
              className="third-title"
            />
            <ClipPathTitle
              title="Lactose Free"
              color="#2e2d2f"
              bg="#fed775"
              borderColor="#222123"
              className="fourth-title"
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p className="font-sans">And much more ...</p>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="relative overlay-box">
        <VideoSection />
      </div>
    </section>
  );
};

export default BenefitSection;
