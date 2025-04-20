
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const timelineEvents = [
    {
      year: "2023",
      title: "MyAfrica Inception",
      description: "Israel Christopher and Oyin Oyeladun founded MyAfrica with a vision to create digital solutions for African businesses."
    },
    {
      year: "2024",
      title: "Rebranding to AutoMind",
      description: "Expanded vision to include AI and robotics, rebranding as AutoMind to reflect the broader technological focus."
    },
    {
      year: "2024",
      title: "Headquarters Established",
      description: "Established headquarters in Akure, Ondo State, Nigeria as a hub for innovation and development."
    },
    {
      year: "2024",
      title: "Launch of Core Services",
      description: "Unveiled the first suite of productivity software solutions and AI concepts."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AutoMind</h1>
            <p className="text-lg text-muted-foreground mb-8">
              From MyAfrica to AutoMind — Our journey of innovation and technological advancement
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-automind-dark/50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-automind-purple">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the leading tech company that creates innovative software and AI-powered 
                robotic technologies to boost daily human productivity across all sectors.
              </p>
            </div>
            
            <div className="bg-white dark:bg-automind-dark/50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-automind-blue">Our Mission</h2>
              <p className="text-muted-foreground">
                To build top-tier software solutions and AI-driven machines that revolutionize 
                work in business, agriculture, real estate, social spaces, and personal lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-gray-50 dark:bg-automind-dark/30">
        <div className="container-custom">
          <SectionHeading 
            title="Our Founders" 
            subtitle="The visionaries behind AutoMind's innovation and growth"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&q=80"
                  alt="Israel Christopher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Israel Christopher</h3>
                <p className="text-sm text-automind-purple mb-3">Software Developer, AI Expert</p>
                <p className="text-muted-foreground">
                  Israel is an accomplished software developer specializing in JavaScript and Python. 
                  With a deep understanding of AI technologies, he leads the technical development 
                  of AutoMind's innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
                  alt="Oyin Oyeladun"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Oyin Oyeladun</h3>
                <p className="text-sm text-automind-purple mb-3">Full Stack Developer</p>
                <p className="text-muted-foreground">
                  Oyin is a versatile full-stack developer with expertise in creating 
                  comprehensive software solutions. Her skills span across multiple 
                  technologies, allowing her to build robust and scalable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Our Journey" 
            subtitle="The evolution of AutoMind from concept to reality"
          />
          
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-automind-purple/30 last:border-0">
                <div className="absolute left-[-8px] top-2 w-4 h-4 bg-automind-purple rounded-full"></div>
                <div className="bg-white dark:bg-automind-dark/50 p-5 rounded-lg shadow-sm">
                  <div className="text-sm font-semibold text-automind-purple mb-1">
                    {event.year}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-16 bg-gray-50 dark:bg-automind-dark/30">
        <div className="container-custom">
          <SectionHeading 
            title="Our Headquarters" 
            subtitle="Located in Akure, Ondo State, Nigeria"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[400px] rounded-lg overflow-hidden">
              {/* Embed Google Map - in a real implementation this would be an actual embedded map */}
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Interactive Map Would Be Embedded Here</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  Our headquarters is located in Akure, Ondo State, Nigeria. 
                  We've created a collaborative environment that fosters innovation 
                  and technological development.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in our services or want to learn more about AutoMind? 
                  Reach out to us through our contact channels.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
