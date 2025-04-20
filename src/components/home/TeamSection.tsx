
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Israel Christopher",
      role: "Software Developer & AI Expert",
      bio: "Specializes in JavaScript, Python, and AI technologies.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Oyin Oyeladun",
      role: "Full Stack Developer",
      bio: "Expert in building end-to-end software solutions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The minds behind AutoMind's innovative solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
