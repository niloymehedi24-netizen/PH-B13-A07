import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">
          Keen<span className="text-3xl text-green-900">Keeper</span>
        </h2>
        <ul className="flex justify-between gap-4">
          <li>
            <Link to={"/"} className="flex items-center gap-0.5">
              <span className="text-gray-600">
                <FaHome></FaHome>
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/timeline"} className="flex items-center gap-0.5">
              <span className="text-gray-600">
                <RiTimeLine></RiTimeLine>
              </span>
              Timeline
            </Link>
          </li>
          <li>
            <Link to={"/stats"} className="flex items-center gap-0.5">
              <span className="text-gray-600">
                <ImStatsDots></ImStatsDots>
              </span>
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
