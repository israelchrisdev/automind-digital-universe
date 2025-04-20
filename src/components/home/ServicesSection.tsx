
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Building, Car, Cpu, Smartphone, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "Business Solutions",
      description: "Productivity software tailored for business operations and management.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Agricultural Tech",
      description: "Advanced software solutions for modern agricultural practices and management.",
      icon: <Tractor size={28} />,
    },
    {
      title: "Real Estate Tech",
      description: "Digital solutions for property management and real estate operations.",
      icon: <Building size={28} />,
    },
    {
      title: "AI Robotics",
      description: "AI-powered drone robots for air & land delivery and smart operations.",
      icon: <Cpu size={28} />,
    },
    {
      title: "AI Smartphones",
      description: "Next-generation smartphones with advanced AI capabilities.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "Autonomous Vehicles",
      description: "AI driverless solar cars with flying capabilities and extended range.",
      icon: <Car size={28} />,
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-automind-dark/30">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="We build innovative solutions across multiple sectors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="default" className="btn-primary inline-flex items-center gap-2">
            <Link to="/services">
              View All Services <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
