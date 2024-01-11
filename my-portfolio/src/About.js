import React from 'react';
import { Element } from 'react-scroll';
import './About.css';

const About = () => {
  return (
    <Element name="about" className="element">
      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>About Me</h2>
              
                <p>I am a passionate and results-driven web developer currently in 3rd year of my Computer Science degree at Universitty of Saskatchewan ,SK . I have experience with a focus on crafting clean and functional user experiences.
                  I'm currently embarking on a fulfilling journey as a computer science student, constantly seeking opportunities to apply my knowledge and skills in real-world scenarios. </p>
             
            </div>
            
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
