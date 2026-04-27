import { RiTimeLine } from "react-icons/ri";
import MyNavLink from "../MyNavLink";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { useContext } from "react";
import { TimelineContext } from "../../../context/Context";

const Navbar = () => {
  const { timelineData } = useContext(TimelineContext);

  return (
    <div>
      <div className="flex justify-between max-w-7xl mx-auto py-4">
        <h2 className="text-xl font-bold">
          Keen<span className="text-xl text-green-900">Keeper</span>
        </h2>
        <ul className="flex justify-between gap-2">
          <li>
            <MyNavLink to={"/"}>
              <span>
                <FaHome></FaHome>
              </span>
              Home
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/timeline"}>
              <span>
                <RiTimeLine></RiTimeLine>
              </span>
              Timeline({timelineData.length})
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/stats"}>
              <span>
                <ImStatsDots></ImStatsDots>
              </span>
              Stats
            </MyNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
