import React from 'react'
import { assets, footerLinks } from '../assets/asset'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-gray-200 bg-[#EDE3DB]">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between gap-12 py-12 text-gray-600">

          {/* Logo & Description */}
          <div className="max-w-sm">
            <NavLink to="/">
              <img
                src={assets.logo}
                alt="Pullman Euro Car Spare"
                className="h-18 w-[50%] mb-4"
              />
            </NavLink>

            <p className="text-sm font-medium leading-relaxed">
              Elements is the largest chain of photoshoot <br/> locations in India with presence in Bangalore and Chennai.
            </p>
          </div>

        
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-[45%] lg:ml-60">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-md font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        className="no-underline hover:underline hover:text-primary font-medium transition-colors duration-200"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
     

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-4">
          <p className="text-center text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} Elements. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer