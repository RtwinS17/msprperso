import React, { useEffect, useState } from "react";
import axios from "axios";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:5000/faq")
      .then((response) => setFaqs(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des FAQ :", error)
      );
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col w-10/12 mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ❓ Foire aux Questions
      </h1>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={faq.id}
            className="border bg-white border-coral border-l-4 rounded-lg p-4 shadow-md"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-semibold lg:text-lg">{faq.question}</h3>
              <span className="text-xl font-bold">
                {activeIndex === index ? "–" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p  className="mt-4 text-gray-700 transition-all duration-300 ease-in-out">{faq.reponse}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
