import React from "react";
import "./Pricing.css";

const plans = [
  {
    title: "Basic",
    description: "Get started with VisionText for free",
    features: [
      "Basic",
      "Free",
      "Access to 20+ AI Document Templates",
      "Standard Support for Businesses",
      "Generate up to 10 images per month",
      "Live Chat Support",
    ],
    price: 0,
    buttonText: "Get Started",
  },
  {
    title: "Premium",
    description: "Unlock advanced features for creators",
    features: [
      "Unlimited AI Document Templates",
      "Priority Support for Businesses",
      "Generate up to 50 images per month",
      "Live Chat Support",
      "5 Speech-to-Text conversions per month",
    ],
    price: 9.99,
    buttonText: "Get Started",
  },
  {
    title: "Enterprise",
    description: "Tailored solutions for enterprises",
    features: [
      "Customized AI Templates for Your Business",
      "Dedicated Account Manager",
      "Unlimited Image Generation",
      "24/7 Live Chat Support",
      "Unlimited Speech-to-Text conversions",
    ],
    price: 99.99,
    buttonText: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing_head">
          <h1 className="pricing_title">Discover our pricing plans</h1>
          <p>Pick a plan to grow your brand and business</p>
        </div>
      </div>
      <div className="pricingCardsSection">
        {plans.map((plan, index) => (
          <div className="pricingCard" key={index}>
            <div className="pricingCardHead">
              <h2 className="pricingCardTitle">{plan.title}</h2>
              <p className="pricingCardDescription">{plan.description}</p>
              <hr />
            </div>
            <div className="pricingCardBody">
              {plan.features.map((feature, i) => (
                <div className="sentence" key={i}>
                  <div className="sectionImg"></div>
                  {feature}
                </div>
              ))}
              <div className="Price">${<span>{plan.price}</span>}</div>
              <div style={{ textAlign: "center" }}>
                <button type="button" className="buttonGetStarted">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
