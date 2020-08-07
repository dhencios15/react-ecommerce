import React from 'react';

import Directory from '../../components/Directory';
import MenuItem from '../../components/MenuItem';
import './Home.style.scss';

const Home = () => (
  <div className='homepage'>
    <Directory>
      <MenuItem />
    </Directory>
  </div>
);

export default Home;
