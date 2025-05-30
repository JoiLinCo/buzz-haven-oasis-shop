
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";

const EducationalSection = () => {
  const educationalContent = [
    {
      icon: "🐝",
      title: "Bee Biology & Behavior",
      description: "Learn about the fascinating world of bee communication, life cycles, and their crucial role in our ecosystem.",
      topics: ["Bee Communication", "Life Cycle", "Social Structure", "Navigation"]
    },
    {
      icon: "🌸",
      title: "Pollinator Gardens",
      description: "Discover how to create bee-friendly spaces that support local pollinator populations year-round.",
      topics: ["Plant Selection", "Garden Design", "Seasonal Care", "Native Species"]
    },
    {
      icon: "🍯",
      title: "Beekeeping Basics",
      description: "Start your beekeeping journey with comprehensive guides on hive management and bee care.",
      topics: ["Hive Setup", "Seasonal Management", "Honey Harvesting", "Disease Prevention"]
    }
  ];

  const stats = [
    { number: "25,000+", label: "Students Educated", icon: Users },
    { number: "500+", label: "Gardens Created", icon: "🌻" },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "1M+", label: "Bees Helped", icon: "🐝" }
  ];

  return (
    <section id="learn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                {typeof stat.icon === 'string' ? (
                  <div className="text-4xl">{stat.icon}</div>
                ) : (
                  <stat.icon className="h-12 w-12 text-honey-600 mx-auto" />
                )}
              </div>
              <div className="text-3xl font-bold text-honey-800 mb-2">{stat.number}</div>
              <div className="text-honey-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-honey-800 mb-6">
            Learn & Grow Together
          </h2>
          <p className="text-xl text-honey-700 max-w-3xl mx-auto">
            Dive deep into the world of bees with our comprehensive educational resources. From beginner guides to advanced techniques, we're here to support your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {educationalContent.map((content, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-honey-50 to-white border-honey-200">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 group-hover:animate-float">{content.icon}</div>
                <CardTitle className="text-xl text-honey-800">{content.title}</CardTitle>
                <CardDescription className="text-honey-600">
                  {content.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-6">
                  {content.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-honey-400 hexagon flex-shrink-0"></div>
                      <span className="text-sm text-honey-700">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-honey-600 hover:bg-honey-700 text-white group">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Start Learning
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-honey-100 to-amber-light/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-honey-800 mb-4">Join Our Learning Community</h3>
          <p className="text-lg text-honey-700 mb-6 max-w-2xl mx-auto">
            Connect with fellow bee enthusiasts, share experiences, and get expert guidance from experienced beekeepers and conservationists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-honey-600 hover:bg-honey-700 text-white px-8 py-4 rounded-full">
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-honey-600 text-honey-700 hover:bg-honey-100 px-8 py-4 rounded-full">
              Free Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
