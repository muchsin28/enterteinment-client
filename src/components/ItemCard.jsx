import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { useMutation, gql } from '@apollo/client';


const DEL_ITEM = gql`
  mutation DeleteMovie($id: String!){
  deleteMovie(_id:"$id"){
    _id
    title
  }
}
`

export default function ItemCard({ data }) {

  const [deleteMovie] = useMutation(DEL_ITEM);

  return (
    <>
      <Card style={{ width: '15rem', marginBottom: '10px' }} >
        <Card.Img variant="top" src={data.poster_path} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            {data.tags}
          </Card.Text>
          <Row className=" flex justify-content-around">
            <Button size="sm" variant="outline-success">Add to Favourite</Button>
            <Button size="sm" variant="outline-danger" onClick={e => {
              e.preventDefault();
              deleteMovie({ variables: { id: data._id } });
            }}>Delete</Button>
          </Row>
        </Card.Body>
      </Card>
    </>
  )

}