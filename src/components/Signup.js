import React, { useState } from 'react';
import './Custom.css';
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';
import Cookies from 'universal-cookie';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');
    const cookies = new Cookies(); 
    const handleRegister = () => {
        const user = { name, userName, email, passWord };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    navigate('/game');
                    const newUser = JSON.stringify(user); 
                    localStorage.setItem('users', newUser);
                }
            })
            Axios.post("http://localhost:5000/signup", user).then(res => {
                const {token, name, userName, passWord, email} = res.data;
                cookies.set("token", token); 
                cookies.set("name", name); 
                cookies.set("userName", userName); 
                cookies.set("passWord", passWord); 
                cookies.set("email", email); 
            })
    }
    return (
        <div className='mt-16'>
            <div>
                <div>
                    <p className='mb-4 text-xl'>create account</p>
                    <h1 className='text-4xl'>Let’s get to know <br /> you better!</h1>
                </div>

                <div className='py-8'>
                    <input type="text" placeholder="Type your name here" className="w-full max-w-xs input hide-outline" onChange={(e) => setName(e.target.value)} required/>
                    <br />

                    <input type="text" placeholder="Type your username here" className="w-full max-w-xs my-4 input hide-outline" onChange={(e) => setUserName(e.target.value)} required/>
                    <br />

                    <input type="text" placeholder="Type your email here" className="w-full max-w-xs input hide-outline" onChange={(e) => setEmail(e.target.value)} required/>
                    <br />

                    <input type="password" placeholder="Type your password here" className="w-full max-w-xs my-4 input hide-outline" onChange={(e) => setPassword(e.target.value)} required/>
                    <br />

                    <button onClick={handleRegister} className="btn btn-outline btn-info w-80">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;