import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]); 
    const [userName, setUserName] = useState(''); 
    const [passWord, setPassword] = useState('');
    const handleLogin = () =>{
        const logedInUser = { userName, passWord }
        fetch('http://localhost:5000/loggedInUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(logedInUser)
        })
            .then(res => res.json())
            .then(data => {
                setUser(data); 
            })

    }
    console.log(user.map(u=> {
        if(u.email === userName){
            navigate('/newGame')
        }
        else{
            
        }
    })); 
    return (
        <div className='mt-16'>
            <div>
                <div>
                    <p className='mb-4 text-xl'>Login</p>
                    <h1 className='text-4xl'>Please enter your <br /> details</h1>
                </div>

                <div className='py-8'>
                        <input type="text" placeholder="Type your gmail here" className="w-full max-w-xs input hide-outline" onChange={(e)=>setUserName(e.target.value)}/>
                    <br />

                    <input type="password" placeholder="Type your password here" className="w-full max-w-xs my-4 input hide-outline" onChange={(e)=>setPassword(e.target.value)}/>
                    <br />

                    <button onClick={handleLogin} className="btn btn-outline btn-info w-80">Login</button>

                </div>
            </div>
        </div>
    );
};

export default Login;