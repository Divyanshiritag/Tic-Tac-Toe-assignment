import Box from './Box';
import React from 'react'
import "./Board.css"

const Board = ({board, onClick}) => {
  return (
    <div className='board'>
    {board.map((value, idx) => {
        return <Box value = {value} onClick={() => value === null && onClick(idx)} />
    })}
    
    </div>
  )
}

export default Board