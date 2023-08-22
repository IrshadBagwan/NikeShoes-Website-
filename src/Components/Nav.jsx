import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "./Constants";

const Nav = () => {

 
const [isOpen, setIsOpen] = useState(false);  

const toggleNavbar = () =>{
  const header = document.getElementById('header');
  if(!isOpen){
    header.className="padding-x py-4 z-5 w-full"
  }
  
  setIsOpen(!isOpen);
}

  return (
    <div>
      <header
       id="header"
        className="padding-x py-8
          z-10 w-full"
      >
        <nav id='nav' className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul id='ul'
            className="flex-1 flex justify-center
                    items-center gap-16  max-lg:hidden md:pb-0 absolute
                    md:static bg-transparent md:z-auto z-[-1] left-0
                    w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in "
          >
           
            {navLinks.map((item) => (
              <li key={item.label} className="">
                <a
                 href={item.href}
                 className="font-monts
                 errat leading-normal
                 text-lg text-slate-gray hover:text-coral-red duration-500"
                 
                 >
                   {item.label}

                </a>
              </li>
            ))}
          </ul>
          
          <div className="hidden max-lg:block " onClick={toggleNavbar}>
            <img 
             
               src={hamburger}
               alt="Hamburger"
               width={25}
               height={25}
               />
          </div>

        </nav>
        {isOpen && (
           <ul id='ul'
           className="bg-white "
         >
          
           {navLinks.map((item) => (
             <li key={item.label} className="
             text-xl mt-5 bg-white 
             ">
               <a
                href={item.href}
                className="text-slate-gray hover:text-coral-red"
                
                >
                  {item.label}

               </a>
             </li>
           ))}
         </ul>
        )
          
        }
      </header>
    </div>
  );
};

export default Nav;
