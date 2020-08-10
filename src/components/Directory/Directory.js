import React from 'react';
import { useSelector } from 'react-redux';

import './Directory.style.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from './../MenuItem';

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
