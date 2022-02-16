import React from 'react'
import { useDispatch } from 'react-redux'
import { startTakeResource } from '../../redux/actions/resource'


export const SpecificResource = ({hour}) => {

  const dispatch = useDispatch()  
  const handleTakeResource = (hour) => {
    dispatch(startTakeResource(hour))
  }

  return (
    <div className='row mt-1'> 
         
        <div className='col-1 d-flex justify-content-end'>
          <span>{hour}</span>
        </div>
        <div className='col-1'>
          <button
            className='btn btn-light'
            onClick={()=>handleTakeResource(hour)}
          >
            Take Resource
          </button>
        </div>
    </div>
  )
}
