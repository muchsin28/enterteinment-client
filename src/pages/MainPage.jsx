import React from 'react'
import { useQuery, gql } from '@apollo/client';

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
  }
`

export default function MainPage(props) {
  const { loading, data, error } = useQuery(GET_MOVIES)
  if (loading) return <div> Loading...</div>
  if (error) return <div>Error...</div>
  return (
    <>
      <h2>Movie List</h2>
      <div>Movies</div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <hr />
      <h2>TV Series</h2>
      <div>Series</div>
      <div>{JSON.stringify(data.tvseries, null, 2)}</div>
    </>
  )
}