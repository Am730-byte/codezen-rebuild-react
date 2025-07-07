
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Instagram, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "VRITTI GARG",
      role: "Design Lead",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      name: "SHARAD KUMAR",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "MUSKAN SINGH",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "HARSH YADAV",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "RIDHY ARORA",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      name: "ARCHANA GUPTA",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#"
      }
    },
    {
      name: "SAKSHAM DIDI",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "BHAVESH THAWANI",
      role: "Design Team",
      image: "/lovable-uploads/42d73c3c-cfb4-44a5-98a9-9acf1938b34e.png",
      social: {
        instagram: "#"
      }
    }
  ];

  return (
    <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            DESIGN TEAM
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-4 border-pink-500/30 group-hover:border-pink-500/60 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-10 transition-transform duration-300"
                    />
                  </div>
                  
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-pink-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-pink-500 text-sm mb-4 font-medium">
                  {member.role}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center hover:bg-pink-500/40 transition-colors group/icon"
                    >
                      <Linkedin className="w-4 h-4 text-pink-400 group-hover/icon:text-white" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center hover:bg-pink-500/40 transition-colors group/icon"
                    >
                      <Github className="w-4 h-4 text-pink-400 group-hover/icon:text-white" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center hover:bg-pink-500/40 transition-colors group/icon"
                    >
                      <Instagram className="w-4 h-4 text-pink-400 group-hover/icon:text-white" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
