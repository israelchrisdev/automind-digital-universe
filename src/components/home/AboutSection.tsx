
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Clock, Award, Users, Target } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { 
      icon: <Clock className="h-8 w-8 text-automind-purple" />,
      value: "2024", 
      label: "Founded" 
    },
    { 
      icon: <Users className="h-8 w-8 text-automind-purple" />,
      value: "2+", 
      label: "Team Members" 
    },
    { 
      icon: <Award className="h-8 w-8 text-automind-purple" />,
      value: "10+", 
      label: "Technologies" 
    },
    { 
      icon: <Target className="h-8 w-8 text-automind-purple" />,
      value: "4+", 
      label: "Sectors" 
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="About AutoMind"
          subtitle="From MyAfrica to AutoMind — A journey of innovation and vision"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80" 
                  alt="Team members working" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-automind-purple/20 rounded-lg z-0"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-automind-blue/20 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the leading tech company that creates innovative software and AI-powered 
              robotic technologies to boost daily human productivity across all sectors.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8">Our Mission</h3>
            <p className="text-muted-foreground">
              To build top-tier software solutions and AI-driven machines that revolutionize 
              work in business, agriculture, real estate, social spaces, and personal lifestyles.
            </p>
            
            <div className="pt-4">
              <Button asChild className="btn-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-automind-dark/50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
