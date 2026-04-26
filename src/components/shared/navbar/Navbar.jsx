import MyNavLink from "../MyNavLink";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between max-w-7xl mx-auto py-4">
        <h2 className="text-xl font-bold">
          Keen<span className="text-xl text-green-900">Keeper</span>
        </h2>
        <ul className="flex justify-between gap-2">
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/timeline"}>Timeline</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/stats"}>Stats</MyNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
