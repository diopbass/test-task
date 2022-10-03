import React from 'react';

export default function Navbar({ authUser }) {

   
  return (
    <div className="flex justify-between md:justify-center items-center fixed inset-x-0 top-0 py-2 px-3 bg-gray-100">
        <div className="text-xl"> Chat</div>
        <div className="mx-12">  { authUser }</div>
  </div>
  );
}
