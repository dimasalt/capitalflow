'use client';

import Link from "next/link";
import { memo } from "react";

const Navbar = () => {
    //toggles menu button from open to close and other way around
    const toggleMenu = (action: string) => {

        const burger = document.querySelector('#burger');
        const xClose = document.querySelector('#xClose');
        const smallMenu = document.querySelector('#smallMenu');

        if(action === 'open') {
            burger?.classList.add('hidden');
            xClose?.classList.remove('hidden');   
            smallMenu?.classList.remove('hidden');
        }            
        else if(action === 'close'){
            burger?.classList.remove('hidden');
            xClose?.classList.add('hidden');
            smallMenu?.classList.add('hidden');
        }
    }

    return (
        <>
            <nav className="flex justify-around shadow-md bg-cyan-900 py-4 w-full">
                {/* <!-- logo and app name --> */}
                <div className=' w-full md:w-fit'>
                    <Link className=" text-gray-200 font-semibold text-2xl md:text-3xl" href="/">
                        <span className=' text-green-600 ms-3'>Capital</span>Flow
                    </Link>                          
                </div>                    

                {/* <!-- an actual middle menu --> */}
                <div className=" text-gray-400 me-10 justify-center mt-2 text-lg hidden md:flex">    
                <Link className="hover:text-gray-100 me-8" id='test' href="/">
                        <i className="bi bi-house me-1"></i>                       
                        Home
                    </Link>                   
                    <Link className="hover:text-gray-100 me-8" id='test' href="/records">
                        <i className="bi bi-bank me-1"></i>
                        Records
                    </Link>
                    <Link className="hover:text-gray-100 me-8" href="/budgets">
                        <i className="bi bi-cash-coin me-1"></i>
                        Budgets
                    </Link>    
                    <Link className="hover:text-gray-100" href="/contacts">
                        <i className="bi bi-file-earmark-person me-1"></i>
                        Contacts
                    </Link>                                                                          
                </div>

                {/* <!-- right side --> */}
                <div className=' text-gray-400 mt-2 hidden md:flex'>
                    <Link className=" hover:text-gray-100 me-3" href="/help">
                        <i className="bi bi-question-square me-2" ></i>
                        Help
                    </Link>              
                </div>

                <div className='text-gray-400 md:hidden shadow-sm' id="burger">
                    <i className="bi bi-list me-2 text-3xl" onClick={() => toggleMenu('open')}></i>
                </div>
                <div className='text-gray-400 hidden md:hidden shadow-sm' id='xClose'>         
                    <i className="bi bi-x text-3xl me-2" onClick={() => toggleMenu('close')}></i>
                </div>
            </nav>    

            {/* <!-- visible only on small screens and when button is clicked --> */}
            <ul className='bg-neutral-700 text-gray-200 py-2 flex-row justify-items-center w-full hidden md:hidden shadow-sm' id="smallMenu">
                <li>                    
                    <div className='w-full flex justify-start ms-10'>
                        <Link className="hover:text-gray-100 me-8" id='test' href="/">
                            <i className="bi bi-house me-1"></i>
                            Home
                        </Link>
                    </div>
                </li>
                <li>                    
                    <div className='w-full flex justify-start ms-10'>
                        <Link className="hover:text-gray-100 me-8" id='test' href="/records">
                            <i className="bi bi-bank me-1"></i>
                            Records
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='w-full flex justify-start ms-10'>
                        <Link className="hover:text-gray-100 me-8" href="/budgets">
                            <i className="bi bi-cash-coin me-1"></i>
                            Budgets
                        </Link>    
                    </div>
                </li>
                <li>
                    <div className='w-full flex justify-start ms-10'>
                        <Link className="hover:text-gray-100 me-8" href="/contacts">
                            <i className="bi bi-file-earmark-person me-1"></i> 
                            Contacts
                        </Link>  
                    </div>                    
                </li>
                <li>
                    <div className='w-full flex justify-start ms-10'>
                        <Link className=" hover:text-gray-100 me-3" href="/help">
                            <i className="bi bi-question-square me-2" ></i>
                            Help
                        </Link>   
                    </div>           
                </li>
            </ul>       
        </>
    );
}

export default Navbar;