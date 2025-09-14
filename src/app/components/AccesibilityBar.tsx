'use client'
import { Avatar, Bell, Gallery, Sun, Support } from './icons'
import PrimaryBtn from './PrimaryBtn'

const AccesibilityBar = () => {

    const toggleDarkMode =()=>{
		document.documentElement.classList.toggle('dark');
	}
    
  return (
   	<div className="ml-auto flex gap-1 items-center">

          <PrimaryBtn  >
           <Gallery/> Gallery
          </PrimaryBtn>

          <PrimaryBtn>
           
		   <Support/> Support
          </PrimaryBtn>
		 

		  <PrimaryBtn>
			<Bell/>
		  </PrimaryBtn>
		   <PrimaryBtn onClick={toggleDarkMode}>
			<Sun/>
		  </PrimaryBtn>


			<Avatar/>
        </div>
  )
}

export default AccesibilityBar