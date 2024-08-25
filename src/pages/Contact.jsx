import React, { useState } from 'react';
import '../CSS/Contact.css';
import SectionBanner from '../components/Earth/SectionBanner';
import SocialLinks from '../components/Buttons/SocialLinks';

const SuccessNotification = ({ onClose }) => (
  <div className="success">
    <div className="success__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none">
        <path fill-rule="evenodd" fill="#393a37" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div className="success__title">Thank you! Your message has been sent.</div>
    <div className="success__close" onClick={onClose}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
        <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
      </svg>
    </div>
  </div>
);

const ErrorNotification = ({ message, onClose }) => (
  <div className="error">
    <div className="error__message">{message}</div>
    <div className="error__close" onClick={onClose}>✖</div>
  </div>
);

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !email || !message || !subject || !consent) {
      setErrorMessage('All fields are required.');
      return;
    }
  
    setIsLoading(true);
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('subject', subject);
    formData.append('consent', consent);
    formData.append('apikey', import.meta.env.VITE_API_KEY);
  
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      console.log('Response Status:', response.status); // Log status
      return response.json();
    })
    .then(data => {
      console.log('Response Data:', data); // Log API response
      setIsLoading(false);
      if (data.success) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubject('');
        setConsent(false);
      } else {
        setErrorMessage(data.message || 'Failed to send message');
      }
    })
    .catch(error => {
      setIsLoading(false);
      console.error('Error:', error);
      setErrorMessage('An error occurred while sending your message. Please try again later.');
    });
  };
  

  const closeSuccessNotification = () => {
    setIsSubmitted(false);
  };

  const closeErrorNotification = () => {
    setErrorMessage('');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubject('');
    setConsent(false);
    setErrorMessage('');
    setIsSubmitted(false);
  };

  return (
    <>
          <div className="for_contact" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90dvh"}}>
      <div className="notifications" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        {isSubmitted && <SuccessNotification onClose={closeSuccessNotification} />}
        {errorMessage && <ErrorNotification message={errorMessage} onClose={closeErrorNotification} />}
        {isLoading && <LoadingSpinner />}
      </div>
      <div className="for_center_contact" style={{width: "1000px", height: "auto", backgroundColor: "", padding: "50px", display: "flex", justifyContent: "space-around", borderRadius: "20px" }}>
        <div className="form-container">
          <div className="logo-container">
            Contact Us
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              <span className="char-counter">{message.length}/250 characters</span>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Billing Issue">Billing Issue</option>
              </select>
            </div>

            <div className="form-group for_checkbox">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="checkbox"
              />
              <label htmlFor="consent">I agree to the privacy policy</label>
            </div>

            <div className="form-buttons">
              <button className="form-submit-btn" type="submit">Send Message</button>
              <button className="form-reset-btn" type="button" onClick={handleReset}>Reset</button>
            </div>
          </form>

          <p className="signup-link">
            Need support? 
            <a href="#" className="signup-link link"> Visit our help center</a>
          </p>
        </div>
        <div className="sectionbanner">
          <SectionBanner />
        </div>
      </div>
    </div>
    {/* <div className="for_socials" style={{marginBottom: '170px'}}>
      <SocialLinks />
    </div> */}
    </>

  );
};

export default ContactUs;
