
import { Code, Users, Lightbulb, Rocket, Award, Certificate, Network, GraduationCap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-12 h-12 text-pink-400" />,
      title: "36-HOUR CODING SPRINT",
      description: "Immerse yourself in an intense coding experience from Feb 28-Mar 1, 2025"
    },
    {
      icon: <Users className="w-12 h-12 text-pink-400" />,
      title: "TEAM BUILDING",
      description: "Form teams of 1-4 members and collaborate to build innovative solutions"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-pink-400" />,
      title: "INNOVATION FOCUS",
      description: "Work on cutting-edge technologies and solve real-world problems"
    },
    {
      icon: <Rocket className="w-12 h-12 text-pink-400" />,
      title: "AMAZING PRIZES",
      description: "Win exciting prizes worth ₹3,00,000 and gain recognition for your innovations"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-12 h-12 text-pink-400" />,
      title: "RECOGNITION",
      description: "Get recognized by industry experts"
    },
    {
      icon: <Certificate className="w-12 h-12 text-pink-400" />,
      title: "CERTIFICATES",
      description: "Earn certificates of participation"
    },
    {
      icon: <Network className="w-12 h-12 text-pink-400" />,
      title: "NETWORKING",
      description: "Connect with like-minded developers"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-pink-400" />,
      title: "LEARNING",
      description: "Learn from workshops and mentors"
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">ABOUT </span>
            <span className="text-pink-500">CODEZEN</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            CodeZen is more than just a hackathon - it's a celebration of innovation, creativity, 
            and technological excellence. Join 3000+ participants in this exciting journey of 
            building the future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 text-center hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wider">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* What You'll Get Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">WHAT YOU'LL </span>
            <span className="text-pink-500">GET</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 text-center hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wider">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
