
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const words = ["Business", "Agriculture", "Real Estate", "Social Spaces"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animatedWord, setAnimatedWord] = useState(words[0]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    setAnimatedWord(words[wordIndex]);
  }, [wordIndex]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="container-custom relative z-10 flex flex-col justify-center min-h-screen py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Revolutionizing{" "}
              <span 
                className="gradient-text animate-pulse-slow inline-block transition-all duration-500"
              >
                {animatedWord}
              </span>{" "}
              with AI & Tech
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Building innovative software solutions and AI-powered technologies to enhance human productivity across all sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-lg aspect-square relative">
              {/* This is where you would place your animated 3D model or image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-automind-purple to-automind-blue opacity-20 blur-3xl animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for an actual image or 3D model */}
                <div className="relative w-full h-full animate-float">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 border-4 border-automind-purple/30 rounded-full flex items-center justify-center">
                    <span className="text-4xl md:text-6xl gradient-text font-bold">AI</span>
                  </div>
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-automind-blue/20 rounded-full animate-float"></div>
                  <div className="absolute bottom-1/3 left-1/5 w-12 h-12 md:w-20 md:h-20 bg-automind-purple/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
