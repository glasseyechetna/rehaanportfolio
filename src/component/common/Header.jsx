import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);           // mobile menu
  const [desktopDrop, setDesktopDrop] = useState(null);  // desktop dropdown
  const [mobileDrop, setMobileDrop] = useState(null);    // mobile dropdown

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
    { name: "Testimonial", path: "/testimonial" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#e6d0b6] text-[#4B4B4B] sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold tracking-wide whitespace-nowrap"
        >
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {menu.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setDesktopDrop(
                      desktopDrop === item.name ? null : item.name
                    )
                  }
                  className="flex items-center gap-1 text-sm font-medium text-[#1F2937] hover:text-[#C08457] transition"
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      desktopDrop === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown on desktop (opens on click) */}
                {desktopDrop === item.name && (
                  <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-20 min-w-[180px]">
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm hover:bg-[#F9F9F9] ${
                                isActive
                                  ? "text-[#4B4B4B]"
                                  : "text-[#1F2937]"
                              }`
                            }
                            onClick={() => setDesktopDrop(null)}
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#4B4B4B] border-b-2 border-[#C08457] pb-1"
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
          className="md:hidden text-[#4B4B4B] p-2"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileDrop(null);
          }}
          aria-label="Toggle menu"
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
                    type="button"
                    onClick={() =>
                      setMobileDrop(
                        mobileDrop === item.name ? null : item.name
                      )
                    }
                    className="flex items-center justify-between w-full text-sm font-medium text-[#4B4B4B] hover:text-[#C08457] py-2"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileDrop === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDrop === item.name && (
                    <ul className="pl-4 mt-1 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <NavLink
                            to={child.path}
                            className="block text-sm text-[#4B4B4B] hover:text-[#C08457] py-1"
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
                    className="block text-sm font-medium text-[#4B4B4B] hover:text-[#C08457] py-2"
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
