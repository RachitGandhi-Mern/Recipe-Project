import { NavLink } from "react-router-dom";

const Nav = () => {
  const baseLink =
    "relative px-5 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-300 ease-in-out";
  const hover = "hover:text-sky-400 hover:bg-sky-400/10";
  const active = "text-sky-400 bg-sky-500/10 shadow-inner";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e10]/80 backdrop-blur-md border-b border-[#1f2937] shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-sky-400 tracking-widest">
          Recipe
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/Recipes", label: "Recipes" },
            { to: "/Create", label: "Create Recipe" },
            { to: "/About", label: "About" },
            {to : "/Favourites" ,label:"Favourites"}
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : "text-slate-300"} ${hover}`
              }
            >
              <span className="inline-block transition-transform duration-200 hover:scale-105">
                {label}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;