
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Mock portfolio projects
const projectsData = [
  {
    id: 1,
    title: "AgriTech Management System",
    description: "A comprehensive farm management system that allows farmers to track crops, livestock, and resources.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    category: "agriculture",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "PropertyPro",
    description: "Real estate management platform for property listings, tenant management, and financial tracking.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
    category: "real-estate",
    technologies: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    id: 3,
    title: "BusinessFlow",
    description: "Enterprise resource planning solution streamlining business operations and workflow management.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    category: "business",
    technologies: ["React", "Django", "MySQL"]
  },
  {
    id: 4,
    title: "SmartDrone Delivery",
    description: "AI-powered drone system for automated package delivery with obstacle avoidance.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    category: "ai-robots",
    technologies: ["Python", "TensorFlow", "C++"]
  },
  {
    id: 5,
    title: "SocialConnect",
    description: "Social networking platform with AI-powered content recommendation algorithms.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "personal",
    technologies: ["React Native", "Firebase", "TensorFlow"]
  },
  {
    id: 6,
    title: "AutoDrive Interface",
    description: "User interface for autonomous vehicle with gesture and voice control capabilities.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    category: "ai-vehicles",
    technologies: ["React", "WebGL", "TensorFlow.js"]
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "business", name: "Business" },
  { id: "agriculture", name: "Agriculture" },
  { id: "real-estate", name: "Real Estate" },
  { id: "personal", name: "Personal" },
  { id: "ai-robots", name: "AI Robots" },
  { id: "ai-vehicles", name: "AI Vehicles" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState(projectsData);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    if (categoryId === "all") {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category === categoryId);
      setProjects(filtered);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our work and see how we've helped our clients achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id 
                    ? "bg-automind-purple hover:bg-automind-purple/90" 
                    : "hover:bg-automind-purple/10 hover:text-automind-purple"
                }
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-automind-dark/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-automind-purple/10 text-automind-purple"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-automind-purple/10 hover:text-automind-purple">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No projects found in this category.</p>
              <Button 
                onClick={() => handleCategoryChange("all")} 
                className="bg-automind-purple hover:bg-automind-purple/90"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
