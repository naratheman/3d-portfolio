import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {newlogo1, menu, close, github, linkedin} from '../assets'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link 
              to="/"
              className='flex items-center gap-2'
              onClick={() => {
                setActive(" ");
                windown.scrollTo(0,0);
              }}
              >
                <img src={newlogo1} alt="newlogo1" className='w-9 h-9 object-contain '/>
                <p className='text-white text-[18px] font-bold cursor-pointer flex'> Narada &nbsp;  <span className='sm:block hidden'> Utoro Dewo </span> </p>
            </Link>

            <div className='grid grid-flow-col auto-cols-max px-5'>
              <div
                onClick={() => window.open ("https://github.com/naratheman", "blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-4"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open ("https://www.linkedin.com/in/narada-utoro-dewo-5404521b9/", "blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
  
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) =>(
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(link.title)}
                    > 
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
            </ul>





            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu}
                alt="menu"
                className='w-[28px] h-[28px] object-contain cursor-pointer'    
                onClick = {() => setToggle(!toggle)}
              />
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-2-[140px] z-10 rounded-xl`}>
                  <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) =>(
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                    > 
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                  ))}
                  </ul>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar