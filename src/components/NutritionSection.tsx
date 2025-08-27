"use client";

import { useEffect, useState } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

import { nutrientLists } from "@/constants";

const NutritionSection = () => {
  const [list, setList] = useState(nutrientLists);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    if (isMobile) {
      setList(nutrientLists.slice(0, 3));
    } else {
      setList(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });

    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, line",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power3.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt="slider-dip"
        className="w-full object-cover"
      />

      <img src="/images/big-img.png" alt="big-image" className="big-img" />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex-col flex justify-center items-center gap-24">
            <h1 className="overflow-hidden place-self-start nutrition-title">
              it still does
            </h1>
            <div
              className="nutrition-text-scroll place-self-start"
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                <h2 className="text-milk-yellow ">Body Good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md overflow-hidden">
            <p className="text-lg md:text-right text-balance">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, protein and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {list.map((nutrient, index: number) => (
              <div key={index} className="relative flex-1 col-center">
                <div className="overflow-hidden">
                  <p className="md:text-lg">{nutrient.label}</p>
                  <p className="text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== list.length - 1 && <div className="spacer-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
