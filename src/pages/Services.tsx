
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Building, Car, Cpu, Smartphone, Tractor } from "lucide-react";

const Services = () => {
  const softwareServices = [
    {
      title: "Business Solutions",
      description: "Custom productivity software designed to optimize business operations, streamline workflows, and enhance overall efficiency.",
      icon: <Briefcase size={28} />,
      id: "business"
    },
    {
      title: "Agricultural Tech",
      description: "Advanced digital solutions for modern farming, crop management, supply chain optimization, and agricultural business operations.",
      icon: <Tractor size={28} />,
      id: "agriculture"
    },
    {
      title: "Real Estate Solutions",
      description: "Comprehensive software for property management, listings, client relationships, and real estate operations.",
      icon: <Building size={28} />,
      id: "real-estate"
    },
  ];

  const aiProducts = [
    {
      title: "AI Drone Robots",
      description: "Autonomous drones capable of air and land delivery, equipped with advanced AI for navigation and obstacle avoidance.",
      icon: <Cpu size={28} />,
      id: "ai-robots"
    },
    {
      title: "AI Smartphones",
      description: "Next-generation smartphones with cutting-edge AI capabilities, offering unprecedented personalization and functionality.",
      icon: <Smartphone size={28} />,
      id: "ai-smartphones"
    },
    {
      title: "AI Driverless Cars",
      description: "Solar-powered autonomous vehicles with flight capabilities up to 10,000 ft and a 100-mile range, revolutionizing transportation.",
      icon: <Car size={28} />,
      id: "ai-vehicles"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Innovative software solutions and AI-powered technologies to enhance productivity across all sectors
            </p>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section id="software" className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Productivity Software" 
            subtitle="Tailored digital solutions for various industries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section id="ai-tech" className="py-16 bg-gray-50 dark:bg-automind-dark/30">
        <div className="container-custom">
          <SectionHeading 
            title="AI-Powered Technologies" 
            subtitle="Revolutionary products that blend AI with cutting-edge hardware"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProducts.map((product, index) => (
              <ServiceCard
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-automind-purple/10 to-automind-blue/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-muted-foreground mb-8">
                We specialize in developing tailored solutions to address your specific challenges.
                Contact our team to discuss how we can help transform your ideas into reality.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
