import React from "react"

const PrimaryBtn = ({children,onClick}:{children:React.ReactNode,onClick?:VoidFunction}) => {
  return (
    <button onClick={onClick} className='rounded-[28px] text-[#959595] px-3 py-1  bg-[#f8f8f8] dark:bg-[#171717] flex gap-2 items-center'>
        {children}
    </button>
  )
}

export default PrimaryBtn