
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock review data
const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    company: "TechCorp Inc.",
    content: "AutoMind's business software solution completely transformed our workflow management. The intuitive interface and customized features have increased our team's productivity by 40%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "AgriGrow Farms",
    content: "The agricultural management system developed by AutoMind has revolutionized how we track crop yields and manage resources. I highly recommend their services to any modern farming operation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "PropertyWise",
    content: "Working with AutoMind on our real estate platform was a seamless experience. Their team understood our requirements perfectly and delivered a robust solution that exceeded our expectations.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Aisha Oladele",
    company: "SwiftDelivery",
    content: "The AI drone prototype developed by AutoMind has cut our delivery times by half. The obstacle avoidance system is remarkable, and the integration with our existing systems was flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "David Williams",
    company: "SocialSpring",
    content: "AutoMind's social networking platform development was exceptional. Their attention to performance optimization and user experience design has helped us achieve a 30% increase in user engagement.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Jennifer Okoro",
    company: "Urban Transit",
    content: "The autonomous vehicle interface developed by AutoMind is years ahead of anything we've seen before. The intuitive controls and safety features are impressive, and the team's knowledge is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

const Reviews = () => {
  // Function to render rating stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-lg text-muted-foreground mb-8">
              See what our clients have to say about their experience working with AutoMind
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Feedback from our satisfied clients across various industries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsData.map((review) => (
              <Card key={review.id} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-muted-foreground flex-grow mb-4">"{review.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Reviews */}
      <section className="py-16 bg-gray-50 dark:bg-automind-dark/30">
        <div className="container-custom">
          <SectionHeading
            title="Video Testimonials"
            subtitle="Hear directly from our clients about their experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Placeholder 1 */}
            <div className="bg-gray-200 dark:bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Video Testimonial Placeholder</p>
            </div>
            
            {/* Video Placeholder 2 */}
            <div className="bg-gray-200 dark:bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Video Testimonial Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
