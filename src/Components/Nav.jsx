import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/Recipes", label: "Recipes" },
  { to: "/Create", label: "Create Recipe" },
  { to: "/About", label: "About" },
  { to: "/Favourites", label: "Favourites" }
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const baseLink = "relative px-5 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-300 ease-in-out transform";
  const hover = "hover:text-sky-400 hover:bg-sky-400/10 hover:-translate-y-0.5 hover:shadow-lg";
  const active = "text-sky-400 bg-sky-500/10 shadow-inner scale-105";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
      scrolled
        ? "bg-[#0e0e10]/95 backdrop-blur-xl border-b border-[#1f2937] shadow-2xl py-2"
        : "bg-[#0e0e10]/80 backdrop-blur-md border-b border-[#1f2937] shadow-lg py-0"
    }`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}>
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-400 tracking-widest relative group cursor-pointer">
          <span className="relative z-10 inline-block transition-all duration-300 group-hover:scale-110">
            Recipe
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 blur-sm"></div>
          <div className="absolute -inset-1 bg-sky-400/10 rounded-lg animate-pulse opacity-50"></div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map(({ to, label }, index) => (
            <NavLink
              key={to}
              to={to}
              style={{ animationDelay: `${index * 100}ms` }}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : "text-slate-300"} ${hover} animate-fade-in-up group overflow-hidden`
              }
            >
              <span className="inline-block transition-all duration-300 group-hover:scale-105 relative z-10">
                {label}
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-sky-400/10 transition-all duration-300 ease-in-out group relative overflow-hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className={`w-6 h-6 transition-all duration-300 ${isOpen ? "rotate-180 scale-110" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                className="animate-draw-line"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
          <div className="absolute inset-0 rounded-lg bg-sky-400/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-out transform ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="px-6 py-4 bg-[#0e0e10]/98 backdrop-blur-xl border-t border-[#1f2937]/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-blue-500/5 animate-gradient-shift"></div>

          <div className="flex flex-col space-y-3 relative z-10">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-sky-500/20 text-sky-400 shadow-inner"
                      : "text-slate-300 hover:text-sky-400 hover:bg-sky-400/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;