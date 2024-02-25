import React from 'react';
import Nav from '../components/Nav';

const ContactPage = () => {
  return (
    <div className="contact page">
      <div className='page-content'>
        <h2>Get in Touch</h2>
        <Nav />
        <p>
          If you have any questions or just want to say hello, feel free to contact me using the form below or by sending an email.
        </p>
        <form className='gray-container contact-form'>
          <input className="form-field" type="text" id="name" name="name" placeholder="Name" />
          <input className="form-field" type="email" id="email" name="email" placeholder="Email" />
          <input className="form-field" id="subject" name="subject" placeholder="Subject"></input>
          <textarea className="form-field" id="message" name="message" placeholder="Message"></textarea>
          <button className="form-field" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;