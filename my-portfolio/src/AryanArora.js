import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import backgroundImage from '/Users/aryanarora/Desktop/git port/aroraaryan.github.io/my-portfolio/src/image1.png';
import './AryanArora.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AryanArora = () => {
  const sectionStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: '20px',
  };

  const [skills, setSkills] = useState([
    'Full Stack Web Developer',
    'Software Developer',
    'Web Designer',


  ]);

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkill, setDisplayedSkill] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const skill = skills[currentSkillIndex];
      if (index < skill.length) {
        setDisplayedSkill((prev) => prev + skill.charAt(index));
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex(0);
          setDisplayedSkill('');
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 1000)
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [skills, currentSkillIndex, index]);

  return (
    <Element name="AryanArora" className="element">
      <section style={sectionStyles}>
        <div className="aryan-content">
          <h1>Aryan Arora</h1>
          <div>{displayedSkill}</div>
          <div>
            <a href="mailto: nki865@usask.ca">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://linkedin.com/in/aryan-arora-6b2317254 ">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/aroraaryan_2002?igsh=bjVzZ2pkaDJrY2ww&utm_source=qr">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          
        </div>
      </section>
    </Element>
  );
};

export default AryanArora;
