import React from 'react'

const ButtonSimple = ({title}) => {
  return (
    <div>
   <button class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-pink dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
   <span class="relative px-5 py-3 transition-all ease-in duration-75 bg-whiteRgba dark:bg-dark-gray-900 rounded-md group-hover:bg-opacity-0">
{title}
</span>
</button>
    </div>
  )
}

export default ButtonSimple
