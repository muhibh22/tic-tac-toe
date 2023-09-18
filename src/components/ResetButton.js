import React from 'react'
import './ResetButton.css'
export const ResetButton = ({resetButton}) => {
  return (
    <button className='reset-btn' onClick={resetButton}>Reset</button>
  )
}
