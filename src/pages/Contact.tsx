
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, GraduationCap } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-amber" />,
      title: "Visit Our Sanctuary",
      details: [
        "123 Pollinator Way",
        "Honey Valley, CA 94158",
        "Open Tuesday-Sunday, 9AM-5PM"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-amber" />,
      title: "Call Us",
      details: [
        "General Info: (555) 123-BEES",
        "Workshop Bookings: (555) 123-LEARN",
        "Emergency Bee Rescue: (555) 911-BEES"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-amber" />,
      title: "Email Us",
      details: [
        "info@beesanctuary.com",
        "education@beesanctuary.com",
        "support@beesanctuary.com"
      ]
    }
  ];

  const services = [
    {
      icon: <MessageCircle className="h-8 w-8 text-amber" />,
      title: "General Inquiries",
      description: "Questions about our products, mission, or bee conservation",
      contact: "info@beesanctuary.com"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-amber" />,
      title: "Educational Programs",
      description: "School visits, workshops, and community education programs",
      contact: "education@beesanctuary.com"
    },
    {
      icon: <Users className="h-8 w-8 text-amber" />,
      title: "Partnerships",
      description: "Collaborate with us on conservation projects and initiatives",
      contact: "partnerships@beesanctuary.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-honey-50 to-amber-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-honey-800 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-honey-700 max-w-3xl mx-auto leading-relaxed">
              Have questions about bees, our products, or want to get involved in conservation efforts? 
              We'd love to hear from you! Our team of bee enthusiasts is here to help.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-honey-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{info.icon}</div>
                    <CardTitle className="text-honey-800">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-honey-600">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Services */}
        <section className="py-16 bg-honey-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-honey-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-honey-800">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-honey-700 mb-2">
                          First Name
                        </label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name"
                          className="border-honey-200 focus:border-honey-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-honey-700 mb-2">
                          Last Name
                        </label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name"
                          className="border-honey-200 focus:border-honey-400"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-honey-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        className="border-honey-200 focus:border-honey-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-honey-700 mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="border-honey-200 focus:border-honey-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-honey-700 mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about how we can help..."
                        rows={6}
                        className="border-honey-200 focus:border-honey-400"
                      />
                    </div>
                    
                    <Button className="w-full bg-honey-600 hover:bg-honey-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-honey-800 mb-8">How Can We Help?</h2>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <Card key={index} className="border-honey-200">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">{service.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-honey-800 mb-2">{service.title}</h3>
                            <p className="text-honey-600 mb-3">{service.description}</p>
                            <p className="text-sm text-honey-500">Contact: {service.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Hours */}
                <Card className="border-honey-200 mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-honey-800">
                      <Clock className="h-5 w-5 mr-2 text-amber" />
                      Sanctuary Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-honey-700">Tuesday - Friday</span>
                        <span className="text-honey-600">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-honey-700">Saturday - Sunday</span>
                        <span className="text-honey-600">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-honey-700">Monday</span>
                        <span className="text-honey-600">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-honey-800 text-center mb-8">Find Us</h2>
            <Card className="border-honey-200 max-w-4xl mx-auto">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-honey-100 to-amber-100 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-amber mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-honey-800 mb-2">Visit Our Sanctuary</h3>
                    <p className="text-honey-600">
                      Located in the heart of Honey Valley, our sanctuary features<br />
                      educational exhibits, a gift shop, and beautiful pollinator gardens.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
