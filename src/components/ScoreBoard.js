import React from 'react';

const ScoreBoard = ({scores, xPlaying}) => {
    let {xScore, oScore} = scores; 
    console.log(xScore, oScore); 
    if(xScore === 1){
        xScore = 0; 
        oScore = 0; 
        return <p className='result'>Congratulations! You win the game!</p>
    }
    else if(oScore === 1){
        xScore = 0; 
        oScore = 0; 
        return <p className='result'>Opps! You loss the game!</p>
    }
    else{
        <p className='result'>Game is draw</p>
    }
    return (
        <div>
            <p></p>
        </div>
    );
};

export default ScoreBoard;