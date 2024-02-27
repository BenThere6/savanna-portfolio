import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from '../components/Nav';

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_45wr2uk',
      'template_y1pnsx8',
      form.current,
      'RWEZEfbjmuw5702LO'
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
      form.current.reset();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }, (error) => {
      console.log('Failed to send email:', error.text);
    });
  };

  return (
    <div className="contact page">
      <div className='page-content'>
        <h2>Get in Touch</h2>
        <Nav />
        <p className='gray-text-container' id='contact-p'>
          If you have any questions or just want to say hello, feel free to contact me using the form below or by sending an email.
        </p>
        <form className='gray-container contact-form' onSubmit={sendEmail} ref={form}>
          <input className="form-field" type="text" id="name" name="name" placeholder="Name" />
          <input className="form-field" type="email" id="email" name="email" placeholder="Email" />
          <input className="form-field" id="subject" name="subject" placeholder="Subject" />
          <textarea className="form-field" id="message" name="message" placeholder="Message" />
          <button className="form-field" id="submit" type="submit">Send Message</button>
        </form>
        <div className={`popup ${showPopup ? 'fade-in' : 'fade-out'}`}>
          Message sent successfully!
        </div>
      </div>
    </div>
  );
};

export default ContactPage;