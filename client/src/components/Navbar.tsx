import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setVisible(false);
      } else {
        // scrolling up → show navbar
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <div className="flex space-x-12 px-14 py-3 rounded-full 
                      bg-[#121221]/80 backdrop-blur-md 
                      shadow-lg shadow-purple-800/20 border border-purple-700/30">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative text-base tracking-wide transition-all duration-300 
               ${
                 isActive
                   ? "text-purple-400 font-semibold"
                   : "text-gray-200 hover:text-purple-300"
               }`
            }
          >
            {({ isActive }) => (
              <>
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 
                                   bg-purple-400 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
