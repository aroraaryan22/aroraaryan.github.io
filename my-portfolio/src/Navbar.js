import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="AryanArora"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>


          </li>
          <li>        
                <a href="https://docs.google.com/document/d/1cRhUY39ZlmkGpz1nbiQXu079n_eUTs72ldx-y6Ahtb4/edit?usp=sharing" download> Resume</a>

          </li>

          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
