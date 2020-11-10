import React, { useState } from 'react';
import Campaigner from './components/Campaigner';
import sortConst, { sortIds } from './consts/sortConst';
import Campaign from './routes/Campaign';
import { container } from './style';

function App() {
  const [sortBy, setSortBy] = useState(sortConst[0]);
  const [sortId, setSortId] = useState(sortIds[0]);

  const handleClick = (val) => {
    setSortBy(sortConst[val]);
    setSortId(sortIds[val]);
  };
  return (
    <div className={container}>
      <Campaigner sortBy={sortBy} onClick={handleClick} />
      <Campaign sortBy={sortId} />
    </div>
  );
}

export default App;
