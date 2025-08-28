"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { cards } from "@/constants";

const TestimonialSection = () => {
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: true,
        },
      });

      tl.to(".first-title", {
        xPercent: 70,
      })
        .to(
          ".second-title",
          {
            xPercent: 25,
          },
          "<"
        )
        .to(
          ".third-title",
          {
            xPercent: -50,
          },
          "<"
        );

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          pin: true,
          scrub: 1.5,
          markers: true,
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });
    },
    { scope: testimonialSectionRef }
  );

  const handlePlay = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handlePause = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <section
      className="testimonials-section -mt-[140vh]"
      ref={testimonialSectionRef}
    >
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What&apos;s</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index: number) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
          >
            <video
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
              onMouseEnter={handlePlay}
              onMouseLeave={handlePause}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
