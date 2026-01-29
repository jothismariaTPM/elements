import React,{ useState,useEffect} from 'react'
import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios'
import {assets} from '../assets/asset';
import toast from 'react-hot-toast';
import { Home, ShoppingBag, X, Phone } from "lucide-react";


const Navbar = () => {
const [open, setOpen] = useState(false);
const [user, setUser] = useState(false);

const location = useLocation();
const isHome = location.pathname === "/";
const navigate = useNavigate();

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

   return (
         <nav
  className={`
    fixed top-0 left-0 right-0 z-50
    flex items-center justify-between
    px-6 lg:px-14 py-4
    transition-all duration-300

    ${
      isHome && !scrolled
        ? "bg-transparent text-white"
        : "bg-white border-b border-gray-300 text-gray-800 shadow-sm"
    }
  `}
>    <NavLink to='/' onClick={()=>setOpen(false)}>
               <img src={assets.logo} alt="Logo" className='w-42 h-14'/>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center font-medium gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">About Us</NavLink>
                <NavLink to="#">Dropbacks</NavLink>
                <NavLink to="#">Celebrities</NavLink>
                <NavLink to="#">Pre-wedding</NavLink>
                <NavLink to="#">Video</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>

          <div className='flex items-center gap-6 sm:gap-10 lg:hidden'>
              <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="lg:hidden">
                {/* Menu Icon SVG 
                <img src={assets.menu_icon} alt="menu" className=''/>*/}
            </button>
          </div>

            {/* Mobile Menu */}
           {open && (
            <>
    {/* Backdrop */}
    <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"/>

    {/* Right Drawer */}
    <div className="fixed top-0 right-0 h-full w-[85%]  bg-white shadow-2xl z-50 lg:hidden flex flex-col animate-slideInRight">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <img className="w-32" src={assets.logo} alt="Logo" />
        <X className="w-7 h-7 text-gray-600 hover:text-black cursor-pointer" onClick={() => setOpen(false)}/>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 m-auto text-center text-gray-700 text-lg md:text-2xl font-medium">

  <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary hover:underline transition">
    <Home className="w-5 h-5 md:w-7 md:h-7" />
     Home
  </NavLink>
  <NavLink to="/products" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary hover:underline transition">
    <ShoppingBag className="w-5 h-5 md:w-7 md:h-7" />
     Products
  </NavLink>
  <NavLink className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary hover:underline transition text-left">
    <Phone className="w-5 h-5 md:w-7 md:h-7" />
     Contact
  </NavLink>
   <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary hover:underline transition">
    <Home className="w-5 h-5 md:w-7 md:h-7" />
     Home
  </NavLink>
  <NavLink to="/products" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary hover:underline transition">
    <ShoppingBag className="w-5 h-5 md:w-7 md:h-7" />
     Products
  </NavLink>
  <NavLink className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary hover:underline transition text-left">
    <Phone className="w-5 h-5 md:w-7 md:h-7" />
     Contact
  </NavLink>
</nav>
    </div>
  </>
)}
        </nav>
    )
}

export default Navbar