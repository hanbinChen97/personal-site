import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Deyan Tian Ph.D.</h2>
        <p>
          <a href="mailto:deyan.tian@rwth-aachen.de">deyan.tian@rwth-aachen.de</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Deyan. I am a{' '}
        <a href="https://www.rwth-aachen.de/">RWTH Aachen University</a> PhD graduate,
        specializing in Subsurface Engineering and Numerical Modeling. My expertise includes
        MOOSE Framework, HPC, FEM, Python, and C++ for developing multi-physics constitutive models
        for rock mass behavior and subsurface storage systems.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Deyan Tian <Link to="/">deyan-tian.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
