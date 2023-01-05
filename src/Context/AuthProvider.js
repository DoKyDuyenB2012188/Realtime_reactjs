import React from 'react'
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/config";
import {onAuthStateChanged} from "firebase/auth";

export const AuthContext = React.createContext();
export default function AuthProvider() {
  const navigate = useNavigate();
  React.useEffect(()=> {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      console.log(user);
      navigate("/");
    })

    return () => {
      unsubscribed();
    }
  },[navigate])
  return (
    <div>AuthProvider</div>
  )
}
