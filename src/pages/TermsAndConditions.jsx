import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-date">
        <strong>Effective Date:</strong> [Insert Date]
      </p>

      <p>
        Welcome to <strong>Elements</strong> (“Elements,” “we,” “us,” or “our”).
        By accessing or using the Elements website (“Service” or “Platform”), you (“you,” “your,” or “User”)
        agree to comply with and be bound by these Terms and Conditions (“Terms”).
        If you do not agree, please stop using the Service immediately.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <ul>
        <li>You are at least 18 years old</li>
        <li>You have read, understood, and agree to these Terms</li>
        <li>You comply with all applicable laws</li>
      </ul>

      {/* rest of your content stays exactly the same */}
    </div>
  );
};

export default TermsAndConditions;
