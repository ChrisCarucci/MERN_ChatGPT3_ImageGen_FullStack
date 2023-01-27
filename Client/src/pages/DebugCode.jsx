import React from 'react'
import '../App.css';
import SideBar from '../components/SideBar';
import MainChat from '../components/MainChat';




const DebugCode = () => {

    const models  = [];
  // grid grid-flow-col gap-3
  return (
    <div className='chatapp'>
      <div className='sidemenu'>
        <SideBar />
      </div>
      <div className='mainchat'>
        <MainChat />
      </div>
    </div>
  )
}

export default DebugCode