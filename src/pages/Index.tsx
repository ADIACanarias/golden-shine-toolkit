import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import BusinessTypes from "@/components/landing/BusinessTypes";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <BusinessTypes />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
