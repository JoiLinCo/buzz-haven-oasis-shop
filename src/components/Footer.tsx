
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Learn": [
      "Bee Biology",
      "Pollinator Gardens", 
      "Beekeeping Basics",
      "Conservation Tips"
    ],
    "Products": [
      "Bee Hotels",
      "Beekeeping Gear",
      "Educational Materials",
      "Eco-Friendly Swag"
    ],
    "Support": [
      "Customer Service",
      "Shipping Info",
      "Returns",
      "FAQ"
    ],
    "Company": [
      "About Us",
      "Our Mission",
      "Partnerships",
      "Contact"
    ]
  };

  return (
    <footer className="bg-honey-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-honey-700 rounded-3xl p-8 mb-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Buzz with the Latest News</h3>
          <p className="text-lg mb-6 text-honey-100">
            Get bee-related tips, product updates, and conservation news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-honey-800 border-none rounded-full"
            />
            <Button className="bg-amber hover:bg-amber-dark text-honey-800 rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-amber hexagon flex items-center justify-center text-xl">
                🐝
              </div>
              <span className="text-xl font-bold">Bee's Sanctuary</span>
            </div>
            <p className="text-honey-200 mb-6 leading-relaxed">
              Creating a sustainable future for bees through education, conservation, and community engagement. Join us in protecting these vital pollinators.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-honey-200 hover:text-white hover:bg-honey-700 rounded-full p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-honey-200 hover:text-white hover:bg-honey-700 rounded-full p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-honey-200 hover:text-white hover:bg-honey-700 rounded-full p-2">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 text-amber">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-honey-200 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-honey-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-amber" />
              <span className="text-honey-200">info@beesanctuary.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-amber" />
              <span className="text-honey-200">1-800-BEE-HELP</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-amber" />
              <span className="text-honey-200">Pollinator Valley, CA</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-honey-300">
            <p>&copy; 2024 Bee's Sanctuary. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
