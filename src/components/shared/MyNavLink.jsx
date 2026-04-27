import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          ` gap-1 p-2 w-27 text-black flex justify-center items-center text-center ${isActive ? "bg-green-900 text-white border rounded-md" : "bg-transparent "}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
