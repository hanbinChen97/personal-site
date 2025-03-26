import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>References</h3>
      </Link>
      <p>
        Professional references available upon request:
      </p>
      <ul>
        <li>Prof. Florian Amann</li>
        <li>Prof. Zhengyang Song</li>
        <li>Dr.-Ing Kavan Khaledi</li>
        <li>Dr. Mohammadreza Jalali</li>
      </ul>
    </div>
  </div>
);

export default References;
