import React from 'react'
import { useQuery, gql } from '@apollo/client';
import ItemCard from '../components/ItemCard'
import { Row } from 'react-bootstrap'


const GET_MOVIES = gql`
  query GetMovies {
    movies {
      _id
      title
      overview
      popularity
      poster_path
      tags
    }

    tvseries {
      _id
      title
      overview
      popularity
      poster_path
      tags
    }
  }
`

export default function MainPage(props) {
  const { loading, data, error } = useQuery(GET_MOVIES)
  if (loading) return <div> Loading...</div>
  if (error) return <div>Error...</div>
  return (
    <>
      <h2>Movie List</h2>
      <Row className="flex-start justify-content-between">

        {
          data.movies.map(movie => {
            return (
              <ItemCard key={movie._id} data={movie} className='mb-2' />
            )
          })
        }

      </Row>
      <hr />
      <h2>TV Series</h2>
      <Row className="flex justify-content-between">

        {
          data.tvseries.map(series => {
            return (
              <ItemCard key={series._id} data={series} className='mb-2' />
            )
          })
        }

      </Row>

    </>


  )
}