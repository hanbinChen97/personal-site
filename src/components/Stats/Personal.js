import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>Personal Stats</h3>
    <Table
      data={data}
      keyMap={{
        label: { href: null, text: 'Metric' },
        value: { href: null, text: 'Value' },
        link: { href: ({ link }) => link, text: 'More Info' },
      }}
    />
    <p>Sources: These statistics were updated in March 2024. You can learn more on my <Link to="/resume">resume</Link>.</p>
  </>
);

export default PersonalStats;
