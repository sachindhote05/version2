import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Version2</h2>
          <p className="text-gray-400 text-sm">
            Empowering Minds, Elevating Lives through training & development.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/clients">Clients</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/resources/blogs">Blogs</a></li>
            <li><a href="/resources/videos">Videos</a></li>
            <li><a href="/resources/downloads">Downloads</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email: info@version2.in <br />
            Phone: +91 7022621235
          </p>
        </div>

      </div>

    
   

{/* SOCIAL ICONS */}
<div className="flex justify-center items-center gap-6 py-6 border-t border-gray-700 mt-10">
  <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer text-lg" />
  <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-lg" />
  <FaYoutube className="text-gray-400 hover:text-white cursor-pointer text-lg" />
  <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer text-lg" />
  <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer text-lg" />
</div>

  {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 Version2. All rights reserved.
      </div>

      
 </footer>
   );
}