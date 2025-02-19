import { useState } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Contact.css';

const SuccessNotification = ({ onClose }) => (
  <div className="success">
    <div className="success__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none">
        <path fillRule="evenodd" fill="#393a37" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" clipRule="evenodd"></path>
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
SuccessNotification.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const ErrorNotification = ({ message, onClose }) => (
  <div className="error">
    <div className="error__message">{message}</div>
    <div className="error__close" onClick={onClose}>✖</div>
  </div>
);

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

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
  const [errors, setErrors] = useState({});

  // Validation Rules
  const validate = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = 'Name must contain only letters and spaces';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (phone && !/^\d{9,15}$/.test(phone)) {
      newErrors.phone = 'Phone number must contain 10-15 digits';
    }

    if (!subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (message.length > 250) {
      newErrors.message = 'Message cannot exceed 250 characters';
    }

    if (!consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setErrorMessage('Please fill in all required fields');
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
      .then(response => response.json())
      .then(data => {
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
    setErrors({});
  };

  return (
    <>
      <div className="for_contact" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90dvh"}}>
        <div className="notifications" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          {isSubmitted && <SuccessNotification onClose={closeSuccessNotification} />}
          {errorMessage && <ErrorNotification message={errorMessage} onClose={closeErrorNotification} />}
          {isLoading && <LoadingSpinner />}
        </div>
        <div className="for_center_contact" style={{width: "1000px", height: "auto", padding: "50px", display: "flex", justifyContent: "space-around", borderRadius: "20px" }}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
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
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
                <span className="char-counter">{message.length}/250 characters</span>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Select a subject</option>
                  <option value="FrontEnd Development">FrontEnd Development</option>
                  <option value="FullStack Development">FullStack Development</option>
                  <option value="Technical Support">Technical Support</option>
                </select>
                {errors.subject && <span className="error-message">{errors.subject}</span>}
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

              <p className="signup-link">
            Need support? 
            <a href="#" className="signup-link link"> Visit our help center</a>
          </p>

          <div className="form-buttons">
              <button className="form-submit-btn" type="submit">Send Message</button>
              <button className="form-reset-btn" type="button" onClick={handleReset}>Reset</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;