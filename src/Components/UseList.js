import'../App.css'
import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import UserCard from './UserCard'

const UseList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res)=> setUsers(res.data))
    .catch((err)=>console.log(err))
      
    }, [])
    
  return (
    <div className='top'>
        {users.map((el)=>(
        <UserCard user={el} key={el.id}/>))}
    </div>
  )
}

export default UseList