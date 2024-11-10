import React from 'react';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    event.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
