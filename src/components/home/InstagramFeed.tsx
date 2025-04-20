
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

// Mock Instagram posts for the demo
// In a real app, these would come from the Instagram API
const mockPosts = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    caption: "Introducing our latest AI robot prototype!",
    likes: 124,
    date: "2 days ago"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    caption: "Our team working on new software solutions.",
    likes: 89,
    date: "5 days ago"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    caption: "Behind the scenes: Coding our newest application.",
    likes: 156,
    date: "1 week ago"
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    caption: "Tech innovation never stops at AutoMind!",
    likes: 201,
    date: "2 weeks ago"
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState(mockPosts);

  // In a real implementation, you'd fetch actual Instagram posts here
  useEffect(() => {
    // Simulating API fetch
    const fetchPosts = async () => {
      // In reality, you'd fetch from Instagram API
      setPosts(mockPosts);
    };
    
    fetchPosts();
  }, []);

  return (
    <section className="section-padding bg-gray-50 dark:bg-automind-dark/30">
      <div className="container-custom">
        <SectionHeading
          title="Follow Us on Instagram"
          subtitle="Stay updated with our latest innovations and behind-the-scenes moments"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a 
              href="https://instagram.com/officialautomind" 
              target="_blank" 
              rel="noopener noreferrer"
              key={post.id}
              className="block group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm truncate">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            asChild
            className="inline-flex items-center gap-2 btn-primary"
          >
            <a 
              href="https://instagram.com/officialautomind" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
              Follow @officialautomind
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
