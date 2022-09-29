import React from "react"

function FormInput({
  className = "",
  label = "",
  name = "",
  id = "",
  type = "text",
  placeholder = " ",
  error = false,
  errorText = "",
  value = "",
  description = "",
  horizontal = false,
  onChange = () => {},
  ...newProps
}) {
  const hasError = error 
  const finalClass = `${className}  relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
    hasError && 'border-red-600'
  }`

  const labelClassName = `absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
    hasError && 'text-red-600'
  }`;

  return (
    <>
      <div>
        {label && 
        <label htmlFor={id} className={labelClassName} > { label } </label>
        }
        <input
            id={id}
            type={type}
            name={name}
            className={finalClass}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e)}
            {...newProps}
        />
      </div>
      {description && (
        <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {description} 
        </p>
      )}
      {error && (
      <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
          {errorText}
      </p>
      )}
    </>
  )
}

export default FormInput
