import React,{useState, useEffect} from 'react';
import UserCard from './UserCard';
import axios from 'axios';

function ListUsers() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/getAllUsers",{urlEncoded: true}).then(res=>{
           setUsers(res.data);
           console.log(res.data)
    }) 
    },[])

  return (
    <div>
        <h2 style={{textAlign:"center"}}>USERS LIST</h2>
        {users.map((user)=>{return <UserCard key={user._id} firstName={user.firstName} lastName = {user.lastName} email={user.email} mobileNo={user.mobileNo}/>})}
    </div>
  )
}
export default ListUsers;