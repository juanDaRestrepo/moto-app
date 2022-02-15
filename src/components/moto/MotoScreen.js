import React from 'react'
import { formatHours } from '../../helpers/formatHours';
import { SpecificResource } from './SpecificResource';
import { Navbar } from '../ui/Navbar';
export const MotoScreen = () => {
  
  const numberOfResources  = formatHours();
  console.log(numberOfResources);
  return (
    <div className='resources'>
       <Navbar />
      {
        numberOfResources.map( hour => (
                    <SpecificResource 
                        key={ hour }
                        hour={hour}
                    />
        ))
      } 
    </div>
  )
}
