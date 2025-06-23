import React, { useState } from "react";

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

  return (
    <section className=" py-16 px-6">
      <div className="max-w-4xl mx-auto">
         <h1 className="text-3xl md:text-4xl text-orange-500 font-extrabold mb-6 border-l-4 border-orange-500 pl-4">
               FAQ 
           </h1>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-5 bg-gray-800"
            >
              <button
                className="w-full text-left font-medium text-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
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
    </section>
  );
};

export default FAQ;



<div className=" py-12 px-6 md:px-20">
           <h1 className="text-3xl md:text-4xl text-orange-500 font-extrabold mb-6 border-l-4 border-orange-500 pl-4">
               FAQ 
           </h1>

</div>