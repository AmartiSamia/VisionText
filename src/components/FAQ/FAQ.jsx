import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How does VisionText generate images?",
    answer:
      "VisionText uses advanced AI algorithms to transform your text input into stunning visuals within seconds.",
  },
  {
    question: "Can I use VisionText for free?",
    answer:
      "Yes, VisionText offers a free plan with limited features to help you get started. Upgrade anytime for more advanced options.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach out to our support team via the help center or by emailing support@visiontext.com.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Absolutely! You can cancel your subscription at any time through your account settings.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "VisionText supports high-quality image formats like PNG and JPG, ready for download and use.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqSection">
      <div className="faqHeader">
        <h1>Frequently Asked Questions</h1>
        <p>
          Learn more about how VisionText works and find answers to common
          questions below.
        </p>
      </div>
      <div className="faqList">
        {faqs.map((faq, index) => (
          <div
            className={`faqItem ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faqQuestion" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faqIcon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faqAnswer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
