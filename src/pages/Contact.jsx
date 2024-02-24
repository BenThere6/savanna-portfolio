import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p>
        If you have any questions or just want to say hello, feel free to contact me using the form below or by sending an email.
      </p>
      <form>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea id="message" name="message" placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;