import React from 'react'

const EachProducts = ({product}) => {
  return (
    <article className="border-solid border-2 border-indigo-600 ml-2 mt-2 w-80 pb-3">
        <h3 className='ml-3'>{product.title}</h3>
        <img className='ml-3' src={product.image} width='150'/>
        <h4 className='ml-3'>{product.price}</h4>
        <button className='bg-indigo-600 ml-3 rounded-lg p-3'>Add To Cart</button>

    </article>
  )
}

export default EachProducts