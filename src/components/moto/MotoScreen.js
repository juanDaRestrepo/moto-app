import React from 'react'
import { formatHours } from '../../helpers/formatHours';
import { SpecificResource } from './SpecificResource';
import { Navbar } from '../ui/Navbar';
export const MotoScreen = () => {
  
  const numberOfResources  = formatHours();
  console.log(numberOfResources);
  return (
    <div>
      
      <Navbar />
      <div className='row'>
        <div className="col-5"></div>
        <div className="col-4">
            {
              numberOfResources.map( hour => (
                    <SpecificResource 
                        key={ hour }
                        hour={hour}
                    />
              ))
            } 
        </div>
      </div>
    </div>
  )
}
