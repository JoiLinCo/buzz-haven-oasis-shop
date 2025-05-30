
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Leaf } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Maya Chen",
      role: "Founder & Lead Apiarist",
      bio: "With over 15 years of experience in bee conservation, Maya founded Bee's Sanctuary to create safe havens for our pollinator friends.",
      image: "🧑‍🔬"
    },
    {
      name: "Marcus Thompson",
      role: "Education Director",
      bio: "Former biology teacher turned bee educator, Marcus develops our educational programs and workshops for schools and communities.",
      image: "👨‍🏫"
    },
    {
      name: "Sofia Rodriguez",
      role: "Product Curator",
      bio: "Sofia carefully selects and tests every product we offer, ensuring they meet our high standards for bee-friendliness and quality.",
      image: "👩‍💼"
    }
  ];

  const milestones = [
    { year: "2019", event: "Bee's Sanctuary founded with our first bee hotel installation" },
    { year: "2020", event: "Launched educational workshops reaching 500+ students" },
    { year: "2021", event: "Partnered with local schools for pollinator garden projects" },
    { year: "2022", event: "Opened our first retail location and expanded product line" },
    { year: "2023", event: "Achieved B-Corp certification for sustainable business practices" },
    { year: "2024", event: "Reached milestone of 10,000 bee hotels installed across the region" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-honey-50 to-amber-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-honey-800 mb-6">
              About Bee's Sanctuary
            </h1>
            <p className="text-xl text-honey-700 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating a world where bees and other pollinators can thrive. 
              Through education, conservation products, and community engagement, we're building 
              sanctuaries for our buzzing friends everywhere.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-honey-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-12 w-12 text-amber mx-auto mb-4" />
                  <CardTitle className="text-honey-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-honey-600">
                    To create safe havens for bees and educate communities about the vital role of pollinators in our ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-honey-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-amber mx-auto mb-4" />
                  <CardTitle className="text-honey-800">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-honey-600">
                    Building a network of bee advocates through workshops, school programs, and local partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-honey-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-12 w-12 text-amber mx-auto mb-4" />
                  <CardTitle className="text-honey-800">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-honey-600">
                    Every product is carefully tested and selected to ensure it truly benefits bees and supports conservation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-honey-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Leaf className="h-12 w-12 text-amber mx-auto mb-4" />
                  <CardTitle className="text-honey-800">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-honey-600">
                    Committed to eco-friendly practices and products that support both bees and environmental health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-honey-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-honey-800 text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-honey-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <CardTitle className="text-honey-800">{member.name}</CardTitle>
                    <Badge className="bg-amber text-honey-800 mx-auto">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-honey-600 text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-honey-800 text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-amber rounded-full"></div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-honey-200 mt-2"></div>}
                  </div>
                  <div>
                    <Badge className="bg-honey-600 text-white mb-2">{milestone.year}</Badge>
                    <p className="text-honey-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-gradient-to-br from-honey-100 to-amber-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-honey-800 mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-amber mb-2">10,000+</div>
                <div className="text-honey-700">Bee Hotels Installed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber mb-2">2,500+</div>
                <div className="text-honey-700">Students Educated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber mb-2">150+</div>
                <div className="text-honey-700">Community Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber mb-2">50+</div>
                <div className="text-honey-700">Pollinator Gardens</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
