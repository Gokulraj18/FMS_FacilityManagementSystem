// Service.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Service.css';
import { useAuth } from './Auth';
import 'bootstrap/dist/css/bootstrap.css';
import phone from './images/phone.png';

const Service = () => { 
  const auth = useAuth();
  const [userlist, setUserList] = useState([]);
  const port = process.env.VITE_PORT || 3000;

  useEffect(() => {
    axios.get(`${port}/Facility-db`)
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  if (!auth.user) {
    return null;
  }

  return (
    <div className='user-container'>
      {userlist.map(x => (
        <div className='single-user' key={x.id}>
          <img className="image-user" alt="user profile" src={x.image} />
          <p>{x.title}</p>
          <p>
          <a style={{ backgroundColor: 'transparent' }} href="tel:+4733378901">
          <img src={phone} alt="Phone" />
          </a>
          <a href="mailto:21cs032@psr.edu.in">Contact Us</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Service; 