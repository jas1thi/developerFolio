import React, {useRef, useState} from "react";
import "./Contact.scss";
import emailjs from '@emailjs/browser';
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { contactInfo } from "../../portfolio";
import emailAnimation from "../../assets/lottie/email.json";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const templateParams = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs.init("yUzl_4oTDlFCB1BRH");
    
    emailjs.send('service_k954ilj', 'template_ajnxrjq', templateParams)
      .then((result) => {
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-main">
        <div className="contact-text-div">
          <h1 className="contact-heading">Contact Me 📞</h1>
          <p className="contact-subtitle">Let's connect and discuss opportunities!</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon">📧</span>
              <span className="detail-value">jaswanthiboyapati@gmail.com</span>
            </div>
            
            <div className="contact-detail">
              <span className="contact-icon">📱</span>
              <span className="detail-value">+1 (346) 562-9019</span>
            </div>
            
            <div className="contact-detail">
              <span className="contact-icon">📍</span>
              <span className="detail-value">Houston, TX</span>
            </div>
          </div>
          
          <div className="contact-animation">
            <DisplayLottie animationData={emailAnimation} />
          </div>
        </div>
        
        <div className="contact-image-div">
          <div className="contact-form-container">
            <h3 className="form-title">Get in Touch!</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ⚠ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
