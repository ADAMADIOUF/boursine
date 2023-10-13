import React from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'

const History = () => {
  const { data: products, isLoading: loading, error } = useGetProductsQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  // Filter products with history: true
  const historyItems = products.filter((item) => item.history === true)

  return (
    <div className='history'>
      <div className='history-container section-center'>
        {historyItems.map((history) => {
          const { name, id } = history
          return (
            <article key={id}>
              <p>{name.substring(0,200)}</p>
              <span className='btn'>
                <Link to={`/product/${id}`}>savoir plus</Link>
              </span>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default History
