
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "WHAT IS CODEZEN?",
      answer: "CodeZen is a 36-hour hackathon where participants from across India compete to build innovative solutions."
    },
    {
      question: "WHO CAN PARTICIPATE?",
      answer: "Anyone passionate about coding and innovation can participate. Whether you're a student, professional, or enthusiast, we welcome all skill levels."
    },
    {
      question: "HOW MANY MEMBERS PER TEAM?",
      answer: "Teams can have 2-4 members. You can form teams before the event or find teammates during the networking session."
    },
    {
      question: "WHAT ARE THE PRIZES?",
      answer: "We have exciting prizes worth ₹3,00,000+ including cash prizes, internship opportunities, and exclusive tech gadgets for winners."
    },
    {
      question: "IS THERE ANY REGISTRATION FEE?",
      answer: "No, participation in CodeZen is completely free. We believe in making innovation accessible to everyone."
    },
    {
      question: "WHAT DOCUMENTS DO I NEED?",
      answer: "You'll need a valid government ID, student ID (if applicable), and laptop for the hackathon. All other materials will be provided."
    }
  ];

  return (
    <section id="faq" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-pink-500">FREQUENTLY ASKED</span>
          <br />
          <span className="text-pink-500">QUESTIONS</span>
        </h2>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg mb-4 px-6"
              >
                <AccordionTrigger className="text-white hover:text-pink-400 font-medium text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
