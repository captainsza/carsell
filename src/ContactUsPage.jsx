import React, { useState } from 'react';
import './ContactUsPage.css'; // Import your CSS file for styling

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to send the form data here
    // For simplicity, let's just set the submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="success-message">
          <p>Thank you for contacting us! We will get back to you soon.</p>
        </div>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUsPage;