import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import ThatToAsk from "@/components/landing/ThatToAsk";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await currentUser();

  if (user) redirect("/dashboard");

  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <ThatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}
