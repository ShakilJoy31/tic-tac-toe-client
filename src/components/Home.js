import React from 'react';
import {useNavigate} from 'react-router-dom'; 
import NoGames from './NoGames';

const Home = () => {
    const user = localStorage.getItem('users'); 
    const parsedUser = JSON.parse(user)
    const navigate = useNavigate(); 
    return (
        <div>
            {!user? <div>
            <div>
                <p className='text-2xl'>async</p>
                <h1 className='text-5xl'>tic tac</h1>
                <h1 className='text-5xl'>toe</h1>
            </div>
            <div className='flex justify-center'>
                <div className='my-4'>
                    <button onClick={()=>navigate('/login')} className="mb-8 btn btn-outline btn-warning w-80">Login</button>

                    <button onClick={()=>navigate('/signup')} className="btn btn-outline btn-info w-80">Register</button>
                </div>
            </div>
        </div> : <div>
        <NoGames parsedUser={parsedUser}></NoGames>
        </div>}
        </div>
    );
};

export default Home;