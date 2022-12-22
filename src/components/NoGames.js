import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoGames = () => {
    const navigate = useNavigate(); 
    const user = JSON.parse(localStorage.getItem('users')); 
    console.log(user); 
    return (
        <div className='mt-12'>
            <h1 className='mb-12 text-xl'>Your Games</h1>
            <h1 className='mb-16 text-4xl text-green-500'>Hi, {user.name}</h1>

            <h1 className='mb-16 text-4xl text-red-500'>No Games Found for you!</h1>

            <button onClick={()=>navigate('/newGame')} className="text-white btn btn-warning w-80">Start a new game</button>
        </div>
    );
};

export default NoGames;