import React from 'react';
import Receipts from '../components/chat/Receipts ';
import Sent from '../components/chat/Sent';
import FormTextarea from '../components/forms/FormTextarea';
import SendIcon from '../icons/SendIcon';

import css from './ChatRoom.module.css'

 const ChatRoom = () => {
  return (
    <>
      <section className="container w-screen flex md:justify-center">
          <div className="bg-white w-full md:w-3/5 md:px-4 py-4">
            <Receipts />
            <Sent />
            <Receipts />
            <Sent />
            <Receipts />
            <Sent />
            <Receipts />
            <Sent />
          </div>
          <div className="flex md:justify-center fixed inset-x-0 bottom-0">
            <div className="flex w-full md:w-3/5 py-2 bg-gray-100">
                <FormTextarea 
                  id="chat"
                  name="chat"
                  placeholder="Type your message"
                />
                <button type="submit" className={css.btnChat}>
                  <SendIcon />
                </button>
            </div>
          </div>
      </section>
    </>
  );
}

export default ChatRoom;