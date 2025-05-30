
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-honey-50 via-honey-100 to-honey-200">
      {/* Hexagon background pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
      
      {/* Floating hexagons */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-honey-300 hexagon animate-float opacity-70"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-amber hexagon animate-float opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-honey-400 hexagon animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-honey-500 hexagon animate-float opacity-60" style={{animationDelay: '0.5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-buzz">
            <div className="inline-block w-24 h-24 bg-honey-400 hexagon flex items-center justify-center text-4xl">
              🐝
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-honey-800 mb-6 leading-tight">
            The Bee's
            <span className="text-amber block">Sanctuary</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-honey-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating safe havens for our precious pollinators. Learn, shop, and join the mission to protect bees for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-honey-600 hover:bg-honey-700 text-white px-8 py-4 text-lg rounded-full group">
              Shop Bee Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-honey-600 text-honey-700 hover:bg-honey-100 px-8 py-4 text-lg rounded-full">
              Learn About Bees
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <Heart className="h-12 w-12 text-honey-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-honey-800 mb-2">Bee Conservation</h3>
              <p className="text-honey-700">Supporting bee populations through education and habitat creation</p>
            </div>
            
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <Leaf className="h-12 w-12 text-honey-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-honey-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-honey-700">Sustainable bee hotels, organic gear, and eco-conscious merchandise</p>
            </div>
            
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mx-auto mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-honey-800 mb-2">Educational Resources</h3>
              <p className="text-honey-700">Learn about bee behavior, beekeeping, and pollinator gardens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
