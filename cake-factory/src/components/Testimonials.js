// src/components/Testimonials.js
import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>"The Russian Medovik cake is a must try, simply the best!"</p>
        <span>- Nicole Kidman</span>
      </div>
      <div className="testimonial">
        <p>"Amazing service and mouth-watering cakes. Highly recommend!"</p>
        <span>- Alex Russo</span>
      </div>
      <div className="testimonial">
        <p>"The Oreo ice cream cake just melts in your mouth!"</p>
        <span>- Timothee Chalamet</span>
      </div>
    </section>
  );
}

export default Testimonials;
