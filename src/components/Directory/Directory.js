import React from 'react';

import './Directory.style.scss';
import MenuItem from './../MenuItem';
import DIRECTRORIES_DATA from './Directory.data';

const Directory = () => {
  const sections = DIRECTRORIES_DATA;

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
