import { func, string } from 'prop-types';
import React, { useState } from 'react';
import { container, imgContainer, sortContainer } from './styles';
import noop from '../../utils/noop';

const Campaigner = ({ sortBy, onClick }) => {
  const [toggle, setToggle] = useState(1);

  const handleClick = () => {
    setToggle(toggle ? 0 : 1);
    onClick(toggle);
  };
  return (

    <div className={container}>
      <div className={imgContainer}>
        <img src="https://kitabisa.com/static/images/logogram__ktbs_white.png" alt="kitabisa" />
      </div>
      <div className={sortContainer} onClick={handleClick}>
        Sorting by {sortBy}
      </div>
    </div>
  );
};

Campaigner.propTypes = {
  onClick: func,
  sortBy: string,
};
Campaigner.defaultProps = {
  onClick: noop,
  sortBy: 'Donation Goal',
};

export default Campaigner;
