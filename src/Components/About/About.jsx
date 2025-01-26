import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const About = () => {
  return (
    
    <div className="about-container">
        <Header/>
      <div className="about-header">
        <h1>About <strong>The Art Of Fragrance</strong></h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to the refined world of <strong>The Art Of Fragrance</strong>, a
          luxury perfume house dedicated to the art of fragrance and timeless elegance.
        </p>
        <p>
          Since our foundation in 1985, we have always sought to offer an unparalleled
          sensory experience, blending tradition and innovation to create exclusive perfumes.
          Every bottle we offer tells a unique story, an alchemy of precious scents from
          all corners of the world.
        </p>
        <div className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>Exclusivity</li>
            <li>Impeccable Quality</li>
            <li>Luxury Craftsmanship</li>
            <li>Commitment to Nature</li>
          </ul>
        </div>
        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            We believe that perfume is an art. It is much more than a simple fragrance:
            it’s an emotion, a memory, a deep connection with the essence of every individual.
            Each fragrance is a work of art that we create with care and passion.
          </p>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default About;


