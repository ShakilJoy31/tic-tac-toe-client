import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatContext } from 'stream-chat-react';

const NewGame = ({ setDbPlayer }) => {
    const navigate = useNavigate();
    const [player, setPlayer] = useState('');
    const oneUser = localStorage.getItem('users');
    let me = JSON.parse(oneUser);
    let databaseUser = [];
    const [rivalUserName, setRivalUserName] = useState("");
    const [channel, setChannel] = useState(null); 
    const { client } = useChatContext();
    const api_key = "xsnur5s6epj5";
    // const chatClient = StreamChat.getInstance(api_key);
    const handleStartGame = async () => {
        fetch('http://localhost:5000/player', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ player })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                databaseUser = data;
                setDbPlayer(data);
                navigate('/onGame');
            })

        const response = await client?.queryUsers({ name: { $eq: rivalUserName } });
        if (response?.users?.length === 0) {
            alert("User is not found");
            return; 
        }
        const newChannel = await client?.channel("messaging", {
            members: [client?.userID, response?.users[0]?.id]
        });
        await newChannel?.watch()
        setChannel(newChannel);
        console.log(response); 

    }
    const localStorageItem = localStorage.getItem('users');
    let userArray = JSON.parse(localStorageItem);
    console.log(channel);
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-xl'>Start a new game</h1>

                <h1 className='my-12 text-4xl'><span className='text-green-500'>Hi, {userArray?.name} <br /> </span>Whom do you want <br /> to play with? </h1>

                <input onChange={(e) => setPlayer(e.target.value)} type="text" placeholder="Type your username here" className="w-full max-w-xs input hide-outline" />

                <button onClick={handleStartGame} className="mt-8 text-white btn btn-warning w-80">Start game</button>

            </div>
        </div>
    );
};

export default NewGame;