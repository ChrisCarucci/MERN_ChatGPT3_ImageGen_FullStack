import React from 'react'
import '../App.css';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';

const DebugCode = () => {
    const models  = [];

  return (
    <section className="max-w-7xl mx-auto flex">
        <LeftSection />
        <RightSection />

    </section>
  )
}

export default DebugCode