import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const menu = [
  
  
    
    {
      name: "Portfolio",
      children: [
        { name: "Interior Design", path: "/portfolio/interior" },
        { name: "Product Design", path: "/portfolio/product" },
        { name: "Design Collection", path: "/portfolio/collection" },
      ],
    },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#E7E1D7] text-[#4B4B4B]">
      <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold  tracking-wide">
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {menu.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-[#1F2937] hover:text-[#C08457] transition"
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm hover:bg-[#F9F9F9] ${
                              isActive ? "text-[#4B4B4B]" : "text-[#1F2937]"
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#4B4B4B] border-b-2 border-[#C08457]"
                      : "text-[#4B4B4B] hover:text-[#C08457]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#4B4B4B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F9F9] border-t shadow-md">
          <ul className="flex flex-col p-4 space-y-3">
            {menu.map((item) =>
              item.children ? (
                <li key={item.name}>
                  <button
                    onClick={() => setPortfolioOpen(!portfolioOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-[#4B4B4B] hover:text-[#C08457]"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        portfolioOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {portfolioOpen && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <NavLink
                            to={child.path}
                            className="block text-sm text-[#4B4B4B] hover:text-[#C08457]"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="block text-sm font-medium text-[#4B4B4B] hover:text-[#C08457]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
