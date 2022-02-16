import React from 'react'

export const SpecificResource = ({hour}) => {
  return (
    <div className='row mt-1'> 
         
        <div className='col-1 d-flex justify-content-end'>
          <span>{hour}</span>
        </div>
        <div className='col-1'>
          <button
            className='btn btn-light'
          >
            Take Resource
          </button>
        </div>
    </div>
  )
}
