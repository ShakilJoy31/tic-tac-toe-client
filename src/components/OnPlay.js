import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

const OnPlay = ({dbPlayer}) => {
    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    const [scores, setScores] = useState({xScore: 0, oScore: 0})
    const [gameOver, setGameOver] = useState(false); 
    const navigate = useNavigate();


    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXplaying] = useState(true); 
    const handleBoxClicked = (boxIdx) =>{
        const updatedBoard = board.map((value, idx)=> {
            if(idx === boxIdx){
                return xPlaying === true ? "X" : "O";  
            }
            else {
                return value;
            }
        })
        const winer = checkWiner(updatedBoard);
        if(winer){
            if(winer === "O"){
                let {oScore} = scores; 
                oScore += 1
                setScores({...scores, oScore})
            }
            else{
                let {xScore} = scores; 
                xScore += 1
                setScores({...scores, xScore})
            }
        }
        


        setBoard(updatedBoard); 
        setXplaying(!xPlaying); 
    }
    const checkWiner = (board) =>{
        for(let i = 0; i<winCondition.length; i++){
            const [x,y,z] = winCondition[i]; 
            if(board[x] && board[x] === board[y] && board[y] === board[z]){
                setGameOver(true); 
                return board[x]; 
            }
        }
    }
    const resetGame = () =>{
        setGameOver(false);
        setBoard(Array(9).fill(null))
        setScores({xScore: 0, oScore: 0});

    }
    return (
        <div className='mt-16'>
            <div> 
                <h1 className='text-2xl'>Game with {dbPlayer?.name}</h1>
                <div className='flex items-center justify-center'>
                    <p className='mt-2 mr-2'>Your piece</p>
                    <p className='Xx'>X</p>
                    
                </div>

                <div className='flex items-center justify-center mx-8 mt-12 mb-8'>
                    <div>
                        <ScoreBoard scores={scores} xPlaying={xPlaying}></ScoreBoard>
                    <Board board={board} onClick={gameOver ? resetGame : handleBoxClicked}></Board>
                    <button onClick={resetGame} className="w-32 mt-8 btn btn-outline btn-error">Reset game</button>
                    </div>
                </div>

                <button onClick={()=>{navigate('/newGame')}} className="mt-8 text-white btn btn-warning w-80">Start another game</button>
            </div>
        </div>
    );
};

export default OnPlay;