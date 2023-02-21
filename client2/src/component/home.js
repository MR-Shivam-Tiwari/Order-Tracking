import '../css/home.css';

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const Navigate = useNavigate()

  const [users, Setusers] = useState([]);


  const handleLogout = () => {

    localStorage.clear();
    Navigate("/");
  };



  



  const getUsers = async () => {
    const response = await fetch('http://localhost:8000/data', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("token"),
        "auth": localStorage.getItem("email")
      },
    });
    Setusers(await response.json());

  }
  useEffect(() => {

    getUsers();

  }, []);



  return (
    <>
      <header className="header" >

        <button className='logout' onClick={handleLogout}>
          Logout
        </button>
      </header>
      
    </>
  )
}

