import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NewGame from './components/NewGame';
import NoGames from './components/NoGames';
import OnPlay from './components/OnPlay';
import Signup from './components/Signup';
import { Channel, StreamChat } from 'stream-chat';
import Cookies from 'universal-cookie';

function App() {
  const [dbPlayer, setDbPlayer] = useState([]);
  console.log(dbPlayer);
  const api_key = "xsnur5s6epj5";
  const cookies = new Cookies(); 
    const client = StreamChat.getInstance(api_key);
    const token = cookies.get("token"); 
    if(token){
      client.connectUser({
        id: cookies.get("userId"), 
        name: cookies.get("name"), 
        passWord: cookies.get("passWord"), 
        userName : cookies.get("userName"), 
        email: cookies.get("email")
      }, 
      token).then(user => {
        console.log(user); 
      })
    }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/game' element={<NoGames></NoGames>}></Route>

        <Route path='/newGame' element={<NewGame setDbPlayer={setDbPlayer}></NewGame>}></Route>

        <Route path='/onGame' element={<OnPlay dbPlayer={dbPlayer}></OnPlay>}></Route>

      </Routes>
    </div>
  );
}

export default App;
