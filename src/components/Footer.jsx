import React from "react"
import { assets, footerLinks } from "../assets/asset"
import { NavLink } from "react-router-dom"
import { Facebook, Instagram, LocateIcon, MapPin, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-[#f3ebe4] to-[#e6d8cc] border-t border-black/10 px-14"
    >
      {/* Soft divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-4 pt-14 pb-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <NavLink to="/">
              <img
                src={assets.logo}
                alt="Elements"
                className="w-44"
              />
            </NavLink>

            <p className="text-md leading-relaxed text-gray-700 max-w-sm">
              Elements is the best photoshoot location in India,
              with presence in{" "}
              <span className="font-semibold">Bangalore</span> and{" "}
              <span className="font-semibold">Chennai</span>.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a className="group w-9 h-9 flex items-center justify-center rounded-full bg-[#4267B2] hover:-translate-y-0.5 transition-all">
                <Facebook className="text-white transition" size={18} strokeWidth={1.5} />
              </a>

              <a className="group w-9 h-9 flex items-center justify-center rounded-full bg-[#C13584] hover:-translate-y-0.5 transition-all">
                <Instagram className="text-white transition" size={18} strokeWidth={1.5} />
              </a>

              <a className="group w-9 h-9 flex items-center justify-center rounded-full bg-[#FF0000] hover:-translate-y-0.5 transition-all">
                <Youtube className="text-white transition" size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 justify-self-end">

  {footerLinks.map((section, index) => (
    <div key={index}>
      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">
        {section.title}
      </h3>

      <ul className="space-y-3 text-sm">
        {section.links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              className="relative inline-block text-gray-700 font-medium group"
            >
              {link.text}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>


          {/* Map Section src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.431364791372!2d80.24753270886474!3d12.879960787374573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525be43caed5b7%3A0x47153ba402dfabeb!2sElements%20on%20East%20Coast!5e0!3m2!1sen!2sin!4v1769581955367!5m2!1sen!2sin" */}
          <div className="lg:col-span-1 xl:pl-20">
  <h3 className="text-sm pl-5 font-bold text-gray-900 mb-4 uppercase tracking-widest">
    Visit Us
  </h3>

  {/*<div className="w-[200px] overflow-hidden rounded-md border border-black/10">
    <iframe
      title="Elements Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.431364791372!2d80.24753270886474!3d12.879960787374573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525be43caed5b7%3A0x47153ba402dfabeb!2sElements%20on%20East%20Coast!5e0!3m2!1sen!2sin!4v1769581955367!5m2!1sen!2sin"
      className="w-full h-[100px] transition duration-500"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>*/}
  <div className="flex items-start gap-1">
  <LocateIcon size={16} className="mt-2 text-gray-700 flex-shrink-0" />
  <p className="text-gray-700 leading-relaxed">
    343/3 Rajaji Salai, Ganga Sagar Near Kochar Villa, SH 49, near Mathsya
    Narayana Temple, Panaiyur, Chennai, Tamil Nadu 600119
  </p>
</div>
 <p className="mt-2 text-gray-700">📞 +91 98765 43210</p>
  </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 py-6">
          <p className="text-center text-xs md:text-sm text-gray-600">
            © {new Date().getFullYear()} Elements. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
