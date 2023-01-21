import React from 'react'
import { Waveform } from '@uiball/loaders'
import "./loader.css"

function Loader() {
  return (
    <div className='loader-container'><Waveform 
    size={40}
    lineWeight={3.5}
    speed={1} 
    color="black" 
   /></div>
  )
}

export default Loader