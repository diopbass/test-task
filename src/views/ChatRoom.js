import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Receipts from '../components/chat/Receipts ';
import Sent from '../components/chat/Sent';
import FormTextarea from '../components/forms/FormTextarea';
import { fetchChats } from '../features/chats/ChatSlice';
import { getAuthUser, getUserSuccess } from '../features/users/userSlice';
import SendIcon from '../icons/SendIcon';

import css from './ChatRoom.module.css'

 const ChatRoom = () => {

  
  const dispatch = useDispatch();
  dispatch(getAuthUser())
  dispatch(fetchChats())
  
  // useEffect(() => {
  // }, [dispatch])
  
  const auth = useSelector((state) =>  state.user.authUser)
  // const messages = useSelector((state) =>  state.chat.chats)
  


  return (
    <>
      
      <section className="container w-screen flex md:justify-center overflow-hidden bg-gray-100">
      <div className="flex md:justify-center fixed inset-x-0 top-0 py-2 text-center bg-gray-100">
        Hello {auth }
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
          <div className="flex md:justify-center fixed inset-x-0 bottom-0 bg-gray-100">
            <div className="flex w-full md:w-3/5 py-2 ">
                <FormTextarea 
                  id="chat"
                  name="chat"
                  placeholder="Type your message"
                  // onChange={}
                />
                <button type="submit" className={css.btnChat}>
                  Send <SendIcon />
                </button>
            </div>
          </div>
      </section>
    </>
  );
}


export default ChatRoom;