import React from 'react'

import { useState } from 'react';


const MainChat = () => {

  const [ input, setInput ] = useState();
  const [ chatLog, setChatLog ] = useState([]);


  console.log(chatLog)


  async function handleSubmit(e) {
    e.preventDefault();

    setChatLog ([...chatLog, { user: "me", message: `${input}`}])
    setInput("");

    const response = await fetch("http://localhost:8080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join("")
        })
      });
      const data = await response.json();
      console.log(data.message)
      setChatLog([...chatLog, { user: "gpt", message: `${data.message}`} ])
  }

  return (
    <div>
      
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message}/>
        ))}
      

      <div className='chat-inputholder'>
        <form onSubmit={handleSubmit}>
          <input 
          rows="1"
          value={input}
          className="chat-input"
          onChange={(e) => setInput(e.target.value)}
          >
          </input>
        </form>
      </div>

    </div>

  )
}

const ChatMessage = ({ message }) => {
  return (
<div>
    <div className={`chatlog ${message.user === "gpt" && "chatgpt"}`}>
      <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
      </div>
      <div className='chat-message'>
      {message.message}
      </div>
    </div>
</div>
  )
}

export default MainChat