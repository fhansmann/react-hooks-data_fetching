/*

import React, {useState} from 'react';


function Square(props) {

return <button onClick={props.onClick}>{props.value}</button>

}

function Board() {
    //state
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))
    // turn state
    const [xIsNext, setXIsNext] = useState(true)
    // handleClick:
    const handleClick = index => {
        const squares = [...boardSquares]
        if(squares[index]) return
        squares[index] = xIsNext ? "X" : "0"

        setBoardSquares(squares)
        setXIsNext(!xIsNext)

        const renderSquare = (index) => {
            return <Square value={boardSquares[index]} onClick{() => handleClick(index)}
        } 

    }

function Winner(squares)

    return (
        <div>

        </div>
    )



}

*/