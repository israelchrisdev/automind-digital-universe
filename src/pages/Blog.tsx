
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock blog posts for demonstration
const blogPostsData = [
  {
    id: 1,
    title: "The Future of AI in Everyday Technology",
    excerpt: "Exploring how artificial intelligence is becoming integrated into the devices we use daily.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    author: "Israel Christopher",
    date: "September 15, 2024",
    category: "AI Technology"
  },
  {
    id: 2,
    title: "Smart Farming: Agricultural Technology Trends",
    excerpt: "How modern technology is transforming traditional farming practices for increased efficiency.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    author: "Oyin Oyeladun",
    date: "September 10, 2024",
    category: "AgriTech"
  },
  {
    id: 3,
    title: "The Rise of Autonomous Delivery Drones",
    excerpt: "Understanding the technology behind delivery drones and their future impact on logistics.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    author: "Israel Christopher",
    date: "September 5, 2024",
    category: "Robotics"
  },
  {
    id: 4,
    title: "Digital Transformation in Real Estate",
    excerpt: "How technology is changing property management and real estate transactions.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
    author: "Oyin Oyeladun",
    date: "August 28, 2024",
    category: "Real Estate"
  },
  {
    id: 5,
    title: "Building Better Business Software",
    excerpt: "Key considerations when developing productivity software for business operations.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    author: "Israel Christopher",
    date: "August 20, 2024",
    category: "Software Development"
  },
  {
    id: 6,
    title: "The Future of Transportation: Flying Cars",
    excerpt: "Examining the technology behind autonomous flying vehicles and their potential impact.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    author: "Oyin Oyeladun",
    date: "August 15, 2024",
    category: "Transportation"
  }
];

const categories = [
  "All",
  "AI Technology",
  "AgriTech",
  "Robotics",
  "Real Estate",
  "Software Development",
  "Transportation"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPostsData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterPosts(query, activeCategory);
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterPosts(searchQuery, category);
  };
  
  const filterPosts = (query: string, category: string) => {
    let filtered = blogPostsData;
    
    if (category !== "All") {
      filtered = filtered.filter(post => post.category === category);
    }
    
    if (query) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, updates, and thought leadership from the AutoMind team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-automind-purple"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category
                          ? "bg-automind-purple text-white"
                          : "hover:bg-automind-purple/10 text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Link to={`/blog/${post.id}`} className="block">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-automind-purple/10 text-automind-purple">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">{post.author}</span>
                            <span className="text-muted-foreground">{post.date}</span>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No articles found matching your search.</p>
                  <Button 
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                      setFilteredPosts(blogPostsData);
                    }}
                    className="bg-automind-purple hover:bg-automind-purple/90"
                  >
                    View All Articles
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
