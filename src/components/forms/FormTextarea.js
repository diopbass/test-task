import React from "react"

function FormTextarea({
  className = "",
  label = "",
  name = "",
  id = "",
  placeholder = "",
  error = false,
  errorText = "",
  value = "",
  rows="1",
  onChange = () => {},
  ...newProps
}) {
  const hasError = error 
  const finalClass = `${className} block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm   ${
    hasError && 'border-red-600'
  }`

  const labelClassName = `absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
    hasError && 'text-red-600'
  }`;

  return (
    <>
      
        {label && (
            <label htmlFor={id} className={labelClassName} > { label } </label>
        )}
        <textarea 
            id={id} 
            rows={rows}
            name={name}
            className={finalClass}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e)}
            {...newProps}
        />
    </>
  )
}

export default FormTextarea
