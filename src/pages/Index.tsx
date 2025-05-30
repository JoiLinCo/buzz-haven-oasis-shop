
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EducationalSection from "@/components/EducationalSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <EducationalSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
