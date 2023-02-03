import React from 'react';
import { useProductContext } from '../../context/productsContext';
import EachProducts from './EachProducts';

const Hero = () => {
  const {products} = useProductContext()
  return (
    <section className='grid grid-cols-4 mt-5 flex'>
      {products.map((product)=>{
        return (
          <EachProducts product= {product} key= {product.id}/>
        )
      })}
    </section>
  );
};

export default Hero;
