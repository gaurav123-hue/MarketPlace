import React, { useState, useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { userData } from '../dummyData';
import { MdLogout } from "react-icons/md";
import BASE_URL from '../config';


export default function Navbar() {
  const user = false; // Replace with actual user state
  const message = false; // Replace with actual message state
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });

      localStorage.removeItem('user');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  // Detect screen size and adjust the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close sidebar when navigating to a new page
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <nav className='py-6 flex justify-between items-center px-4 bg-blue-100 h-[80px]'>
      <div className='flex gap-8'>
        <div className='flex gap-4 items-center justify-center'>
          <div>MPLogo</div>

          <div className="md:hidden absolute right-0 mr-4 top-5">
            <Button onClick={() => setVisible(true)}>
              <GiHamburgerMenu />
            </Button>
          </div>
        </div>

        {/* Sidebar only for mobile screens */}
        {isMobile && (
          <div className="card flex justify-content-center bg-blue-100">
            <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ backgroundColor: '#eff6ff', padding: '20px' }}>
              <div className='mt-6 gap-4 flex flex-col items-center font-bold text-blue-900'>
                {user ? (
                  <Link to="/profile">
                    <div className="flex items-center">
                      <img src={userData.img} className="object-cover h-10 w-10 rounded-full relative" />
                      {message && (
                        <div className="bg-red-700 text-white absolute px-1 text-xs rounded-full top-[54px] left-[170px] sm:top-8 sm:right-8">
                          3
                        </div>
                      )}
                    </div>
                  </Link>
                ) : null}

                <ul className='flex gap-4 flex-col'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/agents">Agents</Link></li>
                </ul>

                <div className='gap-4 flex flex-col'>
                  {!user && (
                    <>
                      {location.pathname !== '/signin' && (
                        <Link to="/signin">
                          <button className="border py-1 px-2 rounded-sm border-blue-900 text-blue-900 bg-white">Sign In</button>
                        </Link>
                      )}
                      {location.pathname !== '/signup' && (
                        <Link to="/signup">
                          <button className='bg-white rounded-sm border border-blue-900 py-1 px-2'>Sign Up</button>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Sidebar>
          </div>
        )}

        {/* Navigation menu for larger screens */}
        <div className='hidden md:block'>
          <ul className='flex gap-4 text-slate-500 items-center'>
            <li className={`${location.pathname === '/' ? 'text-lg text-blue-900 hover:scale-0' : ''} transition-all hover:scale-105 hover:text-black cursor-pointer`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`${location.pathname === '/about' ? 'text-lg text-blue-900 hover:scale-0' : ''} transition-all hover:scale-105 hover:text-black cursor-pointer`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`${location.pathname === '/contact' ? 'text-lg text-blue-900 hover:scale-0' : ''} transition-all hover:scale-105 hover:text-black cursor-pointer`}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={`${location.pathname === '/agents' ? 'text-lg text-blue-900 hover:scale-0' : ''} transition-all hover:scale-105 hover:text-black cursor-pointer`}>
              <Link to="/agents">Agents</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sign In / Sign Up buttons for larger screens */}
      <div className='gap-4 hidden md:flex'>
        {user ? (
          <div>
            <Link to="/profile">
              <div className="flex items-center">
                <img src={userData.img} className="object-cover h-10 w-10 rounded-full relative" />
                {message && (
                  <div className="bg-red-700 text-white absolute px-1 text-xs rounded-full top-4 right-4">3</div>
                )}
              </div>
            </Link>
          </div>
        ) : (
          <>
            {location.pathname === '/profile' ? (
              <MdLogout size={20}
              onClick={handleLogOut}
              className='hover:scale-105 cursor-pointer'/>
            ) : (
              <>
                {location.pathname !== '/signin' && (
                  <Link to="/signin">
                    <button className="border border-blue-700 py-1 px-2 rounded-sm hover:scale-105 text-blue-700 transition-all">Sign In</button>
                  </Link>
                )}
                {location.pathname !== '/signup' && (
                  <Link to="/signup">
                    <button className='bg-blue-500 py-1 px-2 rounded-sm hover:scale-105 transition-all text-white'>Sign Up</button>
                  </Link>
                )}
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
