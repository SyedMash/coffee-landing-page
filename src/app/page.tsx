import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MessageSection from "@/components/MessageSection";
import FlavourSection from "@/components/FlavourSection";
import Smooth from "@/components/Smooth";
import NutritionSection from "@/components/NutritionSection";
import BenefitSection from "@/components/BenefitSection";
import TestimonialSection from "@/components/TestimonialSection";
import FooterSection from "@/components/FooterSection";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Smooth>
        <Hero />
        <MessageSection />
        <FlavourSection />
        <NutritionSection />
        <div>
          <BenefitSection />
          <TestimonialSection />
        </div>
        <FooterSection />
      </Smooth>
    </main>
  );
};

export default Page;
