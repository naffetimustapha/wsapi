import React from 'react'
import'../App.css'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div className='mid'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/6d/41/9c/6d419ce5e471ace5e90e8b9121c2a4b3.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.street}</Card.Text>
        
            <Link to ={`/user/${user.id}`}><Button variant="primary">Go to Profile</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard