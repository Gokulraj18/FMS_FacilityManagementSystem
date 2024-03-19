import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Admin.css';

export default function Admin() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [popup, setPopup] = useState(false);
    const [id1, setId1] = useState('');
    const [title1, setTitle1] = useState('');
    const [img1, setImg1] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/Facility-db')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === '' || title === '' || img === '') {
            alert("Enter valid Data");
        } else {
            axios.post('http://localhost:3001/Facility-db', { id, title, image: img })
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/Facility-db/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    const openPopup = (data) => {
        setPopup(true);
        setId1(data.id);
        setTitle1(data.title);
        setImg1(data.image);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3001/Facility-db/${id1}`, {
            id: id1,
            title: title1,
            image: img1
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div className='admin-container'>
            <form className='admin-form' onSubmit={handleSubmit}>
                <label>Product ID:</label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} /><br />
                <label>Product title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                <label>Product Image:</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} /><br />
                <button type='submit' className='submit'>Submit</button>
                <NavLink to="/" className='home-link'>Home</NavLink>
            </form>

            <table className='admin-table'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Title</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td><img className="image-user" alt="product" src={x.image} /></td>
                            <td>
                                <button className='update' onClick={() => openPopup(x)}>Update</button>
                                <button className='delete' onClick={() => handleDelete(x.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {popup && 
                <div className='popup'>  
                    <form>
                        <button onClick={() => setPopup(false)} className='close'>Close</button><br></br>
                        <label>Product ID:</label>
                        <input type="number" value={id1} onChange={(e) => setId1(e.target.value)} /><br />
                        <label>Product Title:</label>
                        <input type="text" value={title1} onChange={(e) => setTitle1(e.target.value)} /><br />
                        <label>Product Image:</label>
                        <input type="text" value={img1} onChange={(e) => setImg1(e.target.value)} /><br />
                        <button type='submit' onClick={handleUpdate} className='submit'>Submit</button>
                    </form>
                </div>
            }
        </div>
    );
}
