import React from 'react'

import { useState, useEffect } from 'react';


const MainChat = () => {


  const [ input, setInput ] = useState();
  const [ chatLog, setChatLog ] = useState([]);
  

  async function handleSubmit(e) {
    e.preventDefault();

    let chatLogNew = [...chatLog, { user: "me", message: `${input}`} ]
    setInput("");
    setChatLog(chatLogNew)

    const messages = chatLogNew.map((message) => message.message).join("\n")

    const response = await fetch("http://localhost:8080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
        })
      });
      const data = await response.json();
      setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}`} ])
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