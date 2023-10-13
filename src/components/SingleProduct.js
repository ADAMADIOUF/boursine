import React, { useEffect, useState } from 'react'

import Error from '../components/Error'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'

const SingleProduct = () => {
  
const { id: productId } = useParams()
const {
  data: product,
  isLoading:loading,
  isError:error,
} = useGetProductDetailsQuery(productId)
if(loading){
 return<Loading/>
}
  if (error) {
    return <Error />
  }
console.log(product);
  console.log(product);

  return (
    <div>
     {product.img.map((image, index) => (
        <img key={index} src={image.url} alt=""  className='single-img'/>
      ))}
      <p className='single-details section-nav'>{product.name}</p>
    </div>
  )
}

export default SingleProduct
