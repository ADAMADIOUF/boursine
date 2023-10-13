import React from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'

const Blog = () => {
  const { data: products, isLoading: loading, error } = useGetProductsQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  // Filter products with history: true
  const blogItems = products.filter((item) => item.blog === true)

  return (
    <div className='blog'>
      
      <div className='blog-container section-center'>
        {blogItems.map((blog)=>{
          const{nameTwo,desc,id}=blog
          return (
            <article key={id}>
              <h1>{nameTwo}</h1>
              <p>{desc.substring(0,200)}</p>
              <span className='btn'>
                <Link to={`/blog/${id}`}>savoir plus</Link>
              </span>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
