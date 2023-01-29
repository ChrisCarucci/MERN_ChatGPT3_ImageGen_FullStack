import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChoice } from '../slices/chatSlice';


const SideBar = () => {
  const dispatch = useDispatch();

  const [models, setModels] = useState([])

  const modelChoice = useSelector(state => state.modelChoice);
 

  useEffect(() => {
    getEngines();
    setDefaultModel();
  }, [])
  

  function getEngines() {
    fetch("http://localhost:8080/models2")
    .then(res => res.json())
    .then(data => setModels(data.models))
  }

  function setDefaultModel() {
    dispatch(setChoice("text-davinci-003"))
    
  }

  
  return (
    <div>
    <div 
    className='sidemenubutton'
    >
      <span>+ </span> New Chat</div>
      <div className='models w-50'>
        <select name="options" id="AI Models" className='bg-black w-44' 
        onChange={(e) => dispatch(setChoice(e.target.value))}
        value={modelChoice.choice}
        >
        {models.map((model) => {
          return <option 
          key={model.id} 
          value={model.id}
          >
            {model.id}</option>
        })}
          
        </select>
      </div>
    </div>
    
  )
}

export default SideBar