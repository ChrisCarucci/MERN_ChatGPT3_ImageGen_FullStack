import React from 'react'
import { useEffect, useState } from 'react'


const SideBar = () => {

  const [models, setModels] = useState([]) 

  useEffect(() => {
    getEngines();
  }, [])

  

  function getEngines() {
    fetch("http://localhost:8080/models")
    .then(res => res.json())
    .then(data => setModels(data.models))
  }


  return (
    <div>
    <div 
    className='sidemenubutton'
    >
      <span>+ </span>New Chat</div>
      <div className='models w-50'>
        <select name="options" id="AI Models" className='bg-black w-44'>
        {models.map((model) => {
          return <option key={model.id} value={model.id}>{model.id}</option>
        })}
          
        </select>
      </div>
    </div>
    
  )
}

export default SideBar