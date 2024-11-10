import React, { useState } from 'react';
import Header from './components/Header';
import CakeCard from './components/CakeCard';
import Cart from './components/Cart';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (cakeName) => {
    setCartCount(cartCount + 1);
    alert(`${cakeName} has been added to your cart!`);
  };

  return (
    <div>
      <Header />
      <Cart count={cartCount} />
      <section id="cakes" >
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <h2>Our Cakes</h2>
        </div>
        <div className="cake-container">
          <CakeCard
            img="https://www.lemonblossoms.com/wp-content/uploads/2023/03/Tres-Leches-Cake-S2.jpg"
            name="Tres Leches"
            price="$20.00"
            addToCart={() => addToCart('Tres Leches')}
          />
          <CakeCard
            img="https://cdn.quicksell.co/-MMpSad9FgzsoMWQHl8T/products/-NNl9JF0_rmUerfpOBcZ.jpg"
            name="Lotus Cake"
            price="$15.00"
            addToCart={() => addToCart('Lotus Cake')}
          />
          <CakeCard
            img="https://i2.wp.com/noopurskitchen.com/wp-content/uploads/2020/06/DSC_7148-1-4a.jpg?fit=723%2C766&ssl=1"
            name="Medovik Honey Cake"
            price="$22.00"
            addToCart={() => addToCart('Medovik Honey Cake')}
          />
          <CakeCard
            img="https://www.simplyrecipes.com/thmb/CPLBk6dGTuwt_bN-n6Gt38cTuuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Oreo-Ice-Cream-Cake-LEAD-4-5560caeed9404d2b8122d6e5e25d1d4c.jpg"
            name="Oreo Ice Cream Cake"
            price="$19.00"
            addToCart={() => addToCart('Oreo Ice Cream Cake')}
          />
        </div>
      </section>
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
