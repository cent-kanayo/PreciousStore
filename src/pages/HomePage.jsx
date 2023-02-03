import React from 'react';
import { Header, Hero } from '../components';
import { useProductContext } from '../context/productsContext';

const HomePage = () => {
  const {loading} = useProductContext()
  if(loading) return <h1>Loading please wait......</h1>
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;
