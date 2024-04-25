import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,194,118,1)] via-[rgba(208,98,179,1)] to-[rgba(76,87,207,1)] rounded-lg" />
  <div className="px-8 py-2 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   {title}
  </div>
</button>
    </div>
  )
}

export default Button
