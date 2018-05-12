import React from 'react';

const Home = () => {
  const asd = (a) => console.log(a);
  return (
  <div>
    <h2 onClick={asd(1)}>Home Page</h2>
  </div>
)};

export default Home;
