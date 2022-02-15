import React from 'react'

export const SpecificResource = ({hour}) => {
  return (
    <div className='specific_resource'> 
        <div className='hour'>
          <span>{hour}</span>
        </div>
        <div className='button_take_resource'>
          
          <button
            className='btn'
          >
            Take Resource
          </button>
        </div>
    </div>
  )
}
