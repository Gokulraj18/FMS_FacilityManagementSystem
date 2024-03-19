import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Service.css';
import { useAuth } from './Auth';

export const Service = () => {
  const auth = useAuth();
  const [userlist, setUserList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/Facility-db')
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
          <a href="mailto:21cs032@psr.edu.in">need facility</a>
        </div>
      ))}
    </div>
  );
};
