
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <InstagramFeed />
      <CtaSection />
    </Layout>
  );
};

export default Index;
