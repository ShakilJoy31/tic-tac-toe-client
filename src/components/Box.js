import React from 'react';

const Box = ({value, onClick}) => {
    const style = value === "X" ? "box x" : "box O"; 
    return (
        <div>
            <button className={`box btn ${style}`} onClick={onClick}>{value}</button>
        </div>
    );
};

export default Box;