
// import { LockClosedIcon } from '@heroicons/react/20/solid'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/users/userSlice";
import {  useNavigate } from "react-router-dom";
import FormInput from "../components/forms/FormInput";


export default function Signin() {

  const [name, setName] = useState()
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setName(e.target.value)
    if (e.target.value) {
      setError(false)
    }
  }


  const validateForm = () => {
    let isValidForm = true;
   
    if(!name) {
        isValidForm = false;
        setError(true)

        setTimeout(() => {
          setError(true)
        }, 5000);
    }

    return isValidForm;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()){
        const usernameParams = name.split(' ').join('-');
        sessionStorage.setItem('username', name)
        dispatch(login(name))
        navigate(`/chat-room/${usernameParams}`)
    }
  }


  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
              <FormInput
                placeholder="Enter your Name"
                id="username"
                name="name"
                onChange={handleChange}
                value={name}
                error={error}
                errorText="This field is required"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
