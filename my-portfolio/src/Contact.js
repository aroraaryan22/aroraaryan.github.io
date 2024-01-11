import React from 'react';
import { Element } from 'react-scroll';
import './contact.css';
const Contact = () => {
  return (
    <Element name="contact" className="element">
      <section className="contact-content">
        <h2>Contact Me</h2>
        <div>
          <form action="https://formsubmit.co/aroraaryan689@gmail.com" method="POST" id="contact-form">
            <input name="name" type="text" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="4" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
