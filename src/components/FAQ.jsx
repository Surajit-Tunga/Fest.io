import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What is this project about?",
    answer: "This project showcases our team's work and provides detailed insights into our goals and technologies used.",
  },
  {
    question: "How can I contact the team?",
    answer: "You can reach out to us through the contact form or via our social media profiles linked on the page.",
  },
  {
    question: "Is this project open source?",
    answer: "Yes, we plan to release it on GitHub soon with documentation and contribution guidelines.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
  <>
      <div className=" pt-6 px-6 md:px-20">
           <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-orange-500 border-l-4 border-orange-500 pl-4" data-aos="fade-up">
               FAQs
           </h1>
           <p className="text-5xl mx-10"data-aos="fade-up" data-aos-delay="200">
          Frequenly Asked Questions
        </p>
        <p className="mx-10 mt-4 text-orange-50" data-aos="fade-up" data-aos-delay="350">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, temporibus!
        </p>
        <div className="space-y-6 lg:px-40 py-10">
          {faqData.map((item, index) => (
            <div key={index} className="border hover:border-orange-400 border-gray-700 rounded-xl p-5 bg-gray-800"data-aos="fade-up"
              data-aos-delay={index * 100 + 300}>
              <button className="w-full text-left font-medium text-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-orange-100">{item.answer}</div>
              )}
            </div>
          ))}
        </div>          
      </div>
  
  
  
  
  </>
  );
};

export default FAQ;





