import React, { useEffect, useState } from 'react'

import Error from '../components/Error'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'

const SingleBlog = () => {
  const { id: productId } = useParams()
  const {
    data: product,
    isLoading: loading,
    isError: error,
  } = useGetProductDetailsQuery(productId)
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  

  return (
    <div className='section-center'>
      
      <h1 className='single-details'>{product.nameTwo}</h1>
      <p className='single-desc'>
       {product.desc}
      </p>
    </div>
  )
}

export default SingleBlog
