import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const baseLink =
    "relative px-5 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-300 ease-in-out transform";
  const hover = "hover:text-sky-400 hover:bg-sky-400/10 hover:-translate-y-0.5 hover:shadow-lg";
  const active = "text-sky-400 bg-sky-500/10 shadow-inner scale-105";

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-[#0e0e10]/95 backdrop-blur-xl border-b border-[#1f2937] shadow-2xl py-2' 
        : 'bg-[#0e0e10]/80 backdrop-blur-md border-b border-[#1f2937] shadow-lg py-0'
    }`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-4'
      }`}>
        {/* Logo / Brand with pulse animation */}
        <div className="text-2xl font-bold text-sky-400 tracking-widest relative group cursor-pointer">
          <span className="relative z-10 inline-block transition-all duration-300 group-hover:scale-110">
            Recipe
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 blur-sm"></div>
          {/* Subtle pulse effect */}
          <div className="absolute -inset-1 bg-sky-400/10 rounded-lg animate-pulse opacity-50"></div>
        </div>

        <div className="hidden md:flex gap-6">
          {[
            { to: "/", label: "Home", delay: "0ms" },
            { to: "/Recipes", label: "Recipes", delay: "100ms" },
            { to: "/Create", label: "Create Recipe", delay: "200ms" },
            { to: "/About", label: "About", delay: "300ms" },
            { to: "/Favourites", label: "Favourites", delay: "400ms" }
          ].map(({ to, label, delay }) => (
            <NavLink
              key={to}
              to={to}
              style={{ animationDelay: delay }}
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


        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-sky-400/10 transition-all duration-300 ease-in-out group relative overflow-hidden"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0'}`}
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
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-lg bg-sky-400/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
        </button>
      </nav>

      {/* Mobile Navigation Menu with slide and fade */}
      <div
        className={`md:hidden transition-all duration-500 ease-out transform ${
          isOpen 
            ? "max-h-96 opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="px-6 py-4 bg-[#0e0e10]/98 backdrop-blur-xl border-t border-[#1f2937]/50 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-blue-500/5 animate-gradient-shift"></div>
          
          <div className="flex flex-col space-y-3 relative z-10">
            {[
              { to: "/", label: "Home", delay: "100ms" },
              { to: "/Recipes", label: "Recipes", delay: "200ms" },
              { to: "/Create", label: "Create Recipe", delay: "300ms" },
              { to: "/About", label: "About", delay: "400ms" },
              { to: "/Favourites", label: "Favourites", delay: "500ms" }
            ].map(({ to, label, delay }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                style={{ 
                  animationDelay: isOpen ? delay : "0ms",
                  animationFillMode: "both"
                }}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : "text-slate-300"} ${hover} block text-center sm:text-left group relative overflow-hidden ${
                    isOpen ? 'animate-slide-in-right' : ''
                  }`
                }
              >
                <span className="inline-block transition-all duration-300 group-hover:scale-105 relative z-10">
                  {label}
                </span>
                {/* Mobile link glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes draw-line {
          from {
            stroke-dasharray: 0 100;
          }
          to {
            stroke-dasharray: 100 0;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out forwards;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Nav;