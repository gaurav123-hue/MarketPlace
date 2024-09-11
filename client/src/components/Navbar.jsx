import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for detecting route changes
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Get the current location object

  // Detect screen size and adjust the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set to true for screens smaller than 768px (md breakpoint)
    };

    // Run on mount and when window is resized
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close sidebar when navigating to a new page
  useEffect(() => {
    setVisible(false); // Close the sidebar on route change
  }, [location]);

  return (
    <nav className='py-6 flex justify-between items-center px-4 bg-blue-100 h-[80px]'>
      <div className='flex gap-8 '>
        <div className='flex gap-4 items-center justify-center  '>
          <div>
            MPLogo
          </div>

          <div className="md:hidden absolute right-0 mr-4 top-5">
            {/* Button to open the sidebar */}
            
            <Button onClick={() => setVisible(true)}><GiHamburgerMenu /></Button>
          </div>

        </div>


        {/* Sidebar only for mobile screens */}
        {isMobile && (

          <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ backgroundColor: '#eff6ff', padding: '20px' }}>
              <div className='mt-6 gap-4 flex flex-col items-center font-bold text-blue-900'>
                <ul className='flex gap-4 flex-col'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/agents">Agents</Link></li>
                </ul>
                <div className='gap-4 flex flex-col'>
                  <Link to="/signin">
                    <button className="border py-1 px-2 rounded-sm border-blue-900 text-blue-900 bg-white">Sign In</button>
                  </Link>
                  <Link to="/signup">
                    <button className='bg-white rounded-sm border border-blue-900 py-1 px-2 '>Sign Up</button>
                  </Link>
                </div>
              </div>
            </Sidebar>

          </div>

        )}


        {/* Navigation menu for larger screens */}
        <div className='hidden md:block'>
          <ul className='flex gap-4 text-slate-500'>
            <li className='hover:scale-105 transition-all hover:text-black cursor-pointer'><Link to="/">Home</Link></li>
            <li className='hover:scale-105 transition-all hover:text-black cursor-pointer'><Link to="/about">About</Link></li>
            <li className='hover:scale-105 transition-all hover:text-black cursor-pointer'><Link to="/contact">Contact</Link></li>
            <li className='hover:scale-105 transition-all hover:text-black cursor-pointer'><Link to="/agents">Agents</Link></li>
          </ul>
        </div>
      </div>
      {/* Sign In / Sign Up buttons for larger screens */}
      <div className='gap-4 hidden md:flex'>
        <Link to="/signin">
          <button className="border border-blue-700 py-1 px-2 rounded-sm hover:scale-105  text-blue-700 transition-all">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className='bg-blue-500 py-1 px-2 rounded-sm hover:scale-105 transition-all text-white'>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}
