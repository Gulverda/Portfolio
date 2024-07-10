import React, { useState } from 'react';
import '../CSS/Contact.css';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);
  
    // Adjust the URL to match your server setup
    fetch('http://localhost/Portfolio/Portfolio/sendEmail.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        setIsSubmitted(true);
      } else {
        console.log('Failed to send email');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  
  
  

  return (
    <div className="for_center_contact">
      <div className="form-container">
        <div className="logo-container">
          Contact Us
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="form-submit-btn" type="submit">Send Message</button>
        </form>

        {isSubmitted && <p>Thank you! Your message has been sent.</p>}

        <p className="signup-link">
          Need support? 
          <a href="#" className="signup-link link"> Visit our help center</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
