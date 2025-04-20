
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-automind-purple/20 to-automind-blue/20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
            Ready to Revolutionize Your Workflow?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Connect with AutoMind today and discover how our innovative solutions can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
