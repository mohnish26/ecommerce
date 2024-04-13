import React from "react"
import { Navigate } from "react-router-dom"

export const UserProtectedRoute = ({children}) => {
    if (localStorage.getItem("user")){
      return children
    }
  
  }


export const AdminProtectedRoute = ({children}) =>{
    const admin = JSON.parse(localStorage.getItem('user'))
    if (admin.user.email === 'admin@gmail.com'){
        return children
    }
    else{
        <Navigate to="/login" />
    }

}