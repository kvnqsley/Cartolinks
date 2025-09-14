import React from "react"

const PrimaryBtn = ({children}:{children:React.ReactNode}) => {
  return (
    <button className='rounded-[28px] text-[#959595] px-3 py-1  bg-[#f8f8f8] flex gap-2 items-center'>
        {children}
    </button>
  )
}

export default PrimaryBtn