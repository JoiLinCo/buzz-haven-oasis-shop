
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();

  const products = {
    "1": {
      id: 1,
      name: "Premium Bee Hotel",
      price: "$49.99",
      image: "🏨",
      rating: 4.8,
      reviews: 124,
      description: "Handcrafted bamboo bee hotel perfect for mason bees and leafcutter bees",
      badge: "Bestseller",
      longDescription: "Our Premium Bee Hotel is expertly crafted from sustainable bamboo and features multiple tube sizes to accommodate various solitary bee species. Mason bees and leafcutter bees will find the perfect nesting spots in this beautifully designed hotel. Each tube is carefully sized and positioned to provide optimal conditions for bee reproduction and development.",
      features: [
        "Made from 100% sustainable bamboo",
        "Multiple tube sizes for different bee species",
        "Weather-resistant natural finish",
        "Easy wall or fence mounting",
        "Includes installation hardware",
        "Supports local pollinator populations"
      ],
      dimensions: "12\" x 8\" x 6\"",
      weight: "2.5 lbs",
      materials: "Bamboo, natural wood backing"
    },
    "2": {
      id: 2,
      name: "Beekeeper Starter Kit",
      price: "$159.99",
      image: "🥽",
      rating: 4.9,
      reviews: 89,
      description: "Complete protective gear including veil, gloves, and hive tool",
      badge: "Popular",
      longDescription: "Everything you need to start your beekeeping journey safely. This comprehensive starter kit includes professional-grade protective equipment that will keep you safe while working with your hives. Perfect for beginners and experienced beekeepers alike.",
      features: [
        "Full-body ventilated bee suit",
        "Professional leather gloves",
        "Stainless steel hive tool",
        "Smoker with bellows",
        "Instruction manual included",
        "One-year warranty on all items"
      ],
      dimensions: "Various sizes available",
      weight: "4.2 lbs",
      materials: "Cotton-poly blend suit, leather gloves, stainless steel tools"
    },
    "3": {
      id: 3,
      name: "Bee-Friendly Seeds",
      price: "$24.99",
      image: "🌻",
      rating: 4.7,
      reviews: 156,
      description: "Wildflower seed mix specially selected for bee nutrition",
      badge: "Eco-Friendly",
      longDescription: "Transform your garden into a bee paradise with our carefully curated wildflower seed mix. These native and adapted flowers provide essential nectar and pollen throughout the growing season, supporting both honeybees and native pollinators.",
      features: [
        "Native wildflower varieties",
        "Blooms from spring to fall",
        "Covers up to 500 sq ft",
        "No pesticides or chemicals",
        "Drought-tolerant once established",
        "Attracts butterflies and beneficial insects"
      ],
      dimensions: "1 lb seed packet",
      weight: "1 lb",
      materials: "Organic, non-GMO seeds"
    },
    "4": {
      id: 4,
      name: "Honey Extraction Kit",
      price: "$89.99",
      image: "🍯",
      rating: 4.6,
      reviews: 73,
      description: "Professional-grade tools for harvesting and processing honey",
      badge: "Professional",
      longDescription: "Harvest your liquid gold with confidence using our professional honey extraction kit. Designed for small to medium-scale beekeepers, this kit includes everything needed to extract, filter, and store your precious honey harvest.",
      features: [
        "Stainless steel uncapping knife",
        "Double sieve honey strainer",
        "Food-grade honey gate valve",
        "Wax cappings scratcher",
        "5-gallon collection bucket",
        "Step-by-step extraction guide"
      ],
      dimensions: "Bucket: 12\" diameter x 14\" height",
      weight: "8.5 lbs",
      materials: "Stainless steel, food-grade plastic"
    },
    "5": {
      id: 5,
      name: "Bee Conservation Tote",
      price: "$19.99",
      image: "👜",
      rating: 4.5,
      reviews: 201,
      description: "Organic cotton tote bag with beautiful bee-themed design",
      badge: "Eco-Friendly",
      longDescription: "Carry your commitment to bee conservation wherever you go with this beautiful organic cotton tote bag. Featuring original bee-themed artwork, this bag is perfect for grocery shopping, farmers markets, or everyday use while spreading awareness about pollinator protection.",
      features: [
        "100% organic cotton canvas",
        "Original bee conservation artwork",
        "Reinforced handles and seams",
        "Machine washable",
        "Large 15\" x 16\" size",
        "Portion of proceeds supports bee research"
      ],
      dimensions: "15\" x 16\" x 4\"",
      weight: "0.5 lbs",
      materials: "Organic cotton canvas, water-based inks"
    },
    "6": {
      id: 6,
      name: "Beehive Smoker",
      price: "$34.99",
      image: "💨",
      rating: 4.8,
      reviews: 98,
      description: "Stainless steel smoker for calm bee handling during inspections",
      badge: "Essential",
      longDescription: "An essential tool for every beekeeper, our premium stainless steel smoker helps calm bees during hive inspections. The efficient bellows design and heat-resistant construction ensure reliable performance for years of beekeeping.",
      features: [
        "Durable stainless steel construction",
        "Efficient bellows for easy operation",
        "Heat-resistant handle",
        "Large fuel chamber",
        "Copper-plated fire grate",
        "Includes fuel recommendations"
      ],
      dimensions: "4\" diameter x 10\" height",
      weight: "1.8 lbs",
      materials: "Stainless steel, copper-plated grate"
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-honey-800 mb-4">Product Not Found</h1>
          <p className="text-honey-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-honey-600 hover:bg-honey-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-honey-600 hover:text-honey-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="text-8xl lg:text-9xl bg-gradient-to-br from-honey-100 to-honey-200 p-12 rounded-3xl shadow-lg">
                {product.image}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="bg-amber text-honey-800 mb-4">{product.badge}</Badge>
              <h1 className="text-4xl font-bold text-honey-800 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-amber text-amber" />
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-honey-600">({product.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-xl text-honey-700 mb-6">{product.description}</p>
              <p className="text-honey-600 mb-8 leading-relaxed">{product.longDescription}</p>

              <div className="text-3xl font-bold text-honey-700 mb-8">{product.price}</div>

              <div className="flex space-x-4 mb-8">
                <Button size="lg" className="bg-honey-600 hover:bg-honey-700 text-white flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="border-honey-600 text-honey-700">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-honey-600 text-honey-700">
                  <Share className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Features */}
              <Card className="border-honey-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-honey-800 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber mr-2">•</span>
                        <span className="text-honey-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Product Specifications */}
              <Card className="border-honey-200 mt-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-honey-800 mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium text-honey-700">Dimensions:</span>
                      <span className="text-honey-600 ml-2">{product.dimensions}</span>
                    </div>
                    <div>
                      <span className="font-medium text-honey-700">Weight:</span>
                      <span className="text-honey-600 ml-2">{product.weight}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-medium text-honey-700">Materials:</span>
                      <span className="text-honey-600 ml-2">{product.materials}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
