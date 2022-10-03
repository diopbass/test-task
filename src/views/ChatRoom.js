import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import useLocalStorageState from 'use-local-storage-state';
import Receipts from '../components/chat/Receipts ';
import Sent from '../components/chat/Sent';
import FormTextarea from '../components/forms/FormTextarea';
import { addChat, fetchChats } from '../features/chats/ChatSlice';
import { getAuthUser } from '../features/users/userSlice';
import SendIcon from '../icons/SendIcon';
import Navbar from '../layouts/Navbar';

import css from './ChatRoom.module.css'

 const ChatRoom = () => {

  
   const [chats, setChats] = useLocalStorageState("messages", []);
   const [chat, setChat] = useState('')
   const [show, setShow] = useState(false)
   const dispatch = useDispatch();
   const authUser = useSelector((state) =>  state.user.authUser)
   dispatch(getAuthUser())
  // const messages = useSelector((state) =>  state.chat.chats)
  
  useEffect(() => {
    if (!chats) {
      setChats([])
    }
    
  }, [])
  
  
  const handleChange = (e) => {
    setChat(e.target.value)
    if (e.target.value) {
      setShow(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     
    const data = {
      message: chat,
      author: authUser
    };
   
      setChats([...chats, data])
      dispatch(addChat(chats))
      setChat('')
      setShow(false)
    // dispatch(fetchChats())

  }


// console.log(messages)
  return (
    <>
      
      <section className={css.sectionChat}>
          <Navbar authUser={authUser} />
          <div className="bg-white w-full md:w-3/5 px-2 md:px-4 py-4 mt-8 mb-14">
            {chats.map((chat, idx) => (
              <dd key={idx}>
                  {authUser == chat.author ? 

                    <Sent  message={chat.message} />
                    :
                    <Receipts 
                      message={chat.message} 
                      author={chat.author}  
                    />

                  }
              </dd>
            ))}
           
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex md:justify-center fixed inset-x-0 bottom-0 bg-gray-100 ">
              <div className="flex w-full px-2 md:w-3/5 py-2 ">
                  <FormTextarea 
                    id="chat"
                    name="chat"
                    value={chat}
                    placeholder="Type your message"
                    onChange={(handleChange)}
                  />
                  <button type="submit" disabled={show ? false: true}  className={css.btnChat}>
                    <span className="hidden md:block px-6">Send</span> 
                    <span className="lg:hidden px-2"> <SendIcon /></span>
                  </button>
              </div>
            </div>
          </form>
      </section>
    </>
  );
}


export default ChatRoom;