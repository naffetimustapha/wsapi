import React from 'react'
import { Link, useParams, } from 'react-router-dom'
import { useState,useEffect } from 'react'
import{Card,Button} from 'react-bootstrap'
import axios from 'axios'
const Profile = () => {
  const {id}=useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)   
    .then((res)=>setUser(res.data[0]))
    .catch((err)=>console.log(err))
  }, )
  
  return (
    <div>
      <h2>Profile</h2>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/6d/41/9c/6d419ce5e471ace5e90e8b9121c2a4b3.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        
          <Link to={"/users"}><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Profile