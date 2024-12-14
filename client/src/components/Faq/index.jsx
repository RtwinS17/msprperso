import React, { useEffect, useState } from "react";
import axios from "axios";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/faq")
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des FAQ :", error));
  }, []);

  return (
    <div>
      <h1>Foire aux Questions</h1>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.reponse}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
