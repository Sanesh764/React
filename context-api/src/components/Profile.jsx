import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {User}=useContext(useContext);
    if(!User) return <div>please Login</div>
  return (
    <div>
      welcome {User.username}
    </div>
  )
}

export default Profile
