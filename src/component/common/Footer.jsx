import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e6d0b6] text-[#4B4B4B] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-15">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About</h2>
          <p className="text-sm leading-relaxed">
            Interior & Product Designer showcasing a curated collection of
            creative works, design explorations, and professional references.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            
            <li>
              <Link to="/resume" className="hover:text-[#C08457]">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/portfolio/interior" className="hover:text-[#C08457]">
                Interior Design
              </Link>
            </li>
            <li>
              <Link to="/portfolio/product" className="hover:text-[#C08457]">
                Product Design
              </Link>
            </li>
            <li>
              <Link to="/portfolio/collection" className="hover:text-[#C08457]">
                Design Collection
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C08457]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm">Email: rehaantuli2@gmail.com</p>
          <p className="text-sm">Phone:  929-727-7000</p>
          <div className="flex gap-4 mt-4">
         
            <a
              href="https://linkedin.com/in/rehaan-tuli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C08457]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rehaantuli2@gmail.com"
              className="hover:text-[#C08457]"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4B4B4B] text-[#9A8C7A] text-center text-xs py-4">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
