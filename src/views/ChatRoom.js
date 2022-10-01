import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import useLocalStorageState from 'use-local-storage-state';
import Receipts from '../components/chat/Receipts ';
import Sent from '../components/chat/Sent';
import FormTextarea from '../components/forms/FormTextarea';
import { addChat, fetchChats } from '../features/chats/ChatSlice';
import { getAuthUser } from '../features/users/userSlice';
import SendIcon from '../icons/SendIcon';

import css from './ChatRoom.module.css'

 const ChatRoom = () => {

  
  const dispatch = useDispatch();
  const [chats, setChats] = useLocalStorageState("messages", []);
  const [newChat, setNewChat] = useState('')
  const [show, setShow] = useState(false)
  dispatch(getAuthUser())
  // dispatch(fetchChats())
  const authUser = useSelector((state) =>  state.user.authUser)
  // const messages = useSelector((state) =>  state.chat.chats)
  
  useEffect(() => {
    if (!chats) {
      setChats([])
    }
  }, [])
  
  
  const handleChange = (e) => {
    setNewChat(e.target.value)
    if (e.target.value) {
      setShow(true)
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     
    const data = {
      message: newChat,
      author: authUser
    };
   
      setChats([...chats, data])
      dispatch(addChat(chats))
      dispatch(fetchChats())
      setNewChat('')
      setShow(false)
// console.log(chats)
  }


// console.log(chats)
  return (
    <>
      
      <section className={css.sectionChat}>
        <div className="flex md:justify-center fixed inset-x-0 top-0 py-2 text-center bg-gray-100">
          Hello {authUser }
        </div>
          <div className="bg-white w-full md:w-3/5 md:px-4 py-4 mt-8 mb-10">
            <Receipts />
            <Sent />
            <Receipts />
            <Sent />
            <Receipts />
            <Sent />
            <Receipts />
            <Sent />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex md:justify-center fixed inset-x-0 bottom-0 bg-gray-100">
              <div className="flex w-full md:w-3/5 py-2 ">
                  <FormTextarea 
                    id="chat"
                    name="chat"
                    value={newChat}
                    placeholder="Type your message"
                    onChange={handleChange}
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