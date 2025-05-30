
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Premium Bee Hotel",
      price: "$49.99",
      image: "🏨",
      rating: 4.8,
      reviews: 124,
      description: "Handcrafted bamboo bee hotel perfect for mason bees and leafcutter bees",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Beekeeper Starter Kit",
      price: "$159.99",
      image: "🥽",
      rating: 4.9,
      reviews: 89,
      description: "Complete protective gear including veil, gloves, and hive tool",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Bee-Friendly Seeds",
      price: "$24.99",
      image: "🌻",
      rating: 4.7,
      reviews: 156,
      description: "Wildflower seed mix specially selected for bee nutrition",
      badge: "Eco-Friendly"
    },
    {
      id: 4,
      name: "Honey Extraction Kit",
      price: "$89.99",
      image: "🍯",
      rating: 4.6,
      reviews: 73,
      description: "Professional-grade tools for harvesting and processing honey",
      badge: "Professional"
    },
    {
      id: 5,
      name: "Bee Conservation Tote",
      price: "$19.99",
      image: "👜",
      rating: 4.5,
      reviews: 201,
      description: "Organic cotton tote bag with beautiful bee-themed design",
      badge: "Eco-Friendly"
    },
    {
      id: 6,
      name: "Beehive Smoker",
      price: "$34.99",
      image: "💨",
      rating: 4.8,
      reviews: 98,
      description: "Stainless steel smoker for calm bee handling during inspections",
      badge: "Essential"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-honey-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-honey-800 mb-6">
            Bee-utiful Products
          </h2>
          <p className="text-xl text-honey-700 max-w-3xl mx-auto">
            Discover our carefully curated selection of bee-friendly products, from professional beekeeping gear to educational materials and sustainable merchandise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-honey-200">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="text-6xl mb-4 group-hover:animate-buzz">{product.image}</div>
                  <Badge className="absolute top-0 right-0 bg-amber text-honey-800 text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-honey-800">{product.name}</CardTitle>
                <CardDescription className="text-honey-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-honey-700">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-amber text-amber" />
                    <span className="text-sm text-honey-600">{product.rating}</span>
                    <span className="text-sm text-honey-500">({product.reviews})</span>
                  </div>
                </div>
                
                <Button className="w-full bg-honey-600 hover:bg-honey-700 text-white group">
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-buzz" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-honey-600 text-honey-700 hover:bg-honey-100 px-8 py-4 text-lg rounded-full">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
