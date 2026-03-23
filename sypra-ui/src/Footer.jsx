import { Link } from "react-router-dom"
import {MapPin} from "lucide-react"
import logo2 from './images/trans_logo.png'
import GmailIcon from "./images/Gmail.svg";
import WhatsappIcon from "./images/Whatsapp.svg";
import LinkedinIcon from "./images/Linkedin.svg";
import InstagramIcon from "./images/Instagram.svg"; 
import FacebookIcon from "./images/Facebook.svg";





const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 via-blue-50 to-cyan-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo + Intro */}
          <div className="space-y-6"> 
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-44 h-12 overflow-hidden">
                  <img
                    src={logo2}
                    alt="SYPRA INFOTECH"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empowering students with practical skills for industry success through innovative learning experiences.
            </p>
            <div className="flex space-x-4">
<a 
  href="https://www.facebook.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
>
  <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
</a>

<a 
  href="https://www.instagram.com/sypra_infotech?igsh=MTM5a2R4MWE3MDJxaQ==" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
>
  <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
</a>

<a 
  href="https://www.linkedin.com/company/syprainfotech" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
>
  <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Quick Links</h3>
            <div className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Manage Projects" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Programs</h3>
            <div className="space-y-3">
              {["Skill-Based Training", "Industry Certification", "Project-Based Learning", "Career Guidance"].map(
                (program) => (
                  <div key={program} className="text-gray-600 font-medium">
                    {program}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Contact Info</h3>
            <div className="space-y-4">


<div className="flex items-center space-x-3">
  <img src={GmailIcon} alt="Gmail" className="w-5 h-5" />
  <a
    href="mailto:info.sypra@gmail.com"
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
  >
    info@sypra.in
  </a>
</div>

              
<div className="flex items-center space-x-3">
  <img src={WhatsappIcon} alt="Gmail" className="w-5 h-5" />
  <span className="text-gray-600">+91 79734 74146</span>
</div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500">© 2025 SYPRA INFOTECH. All rights reserved. Built with ❤️ for student success.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer