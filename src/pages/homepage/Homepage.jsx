import Banner from "../../components/homepage/Banner";
import Friends from "../../components/homepage/Friends";
import Statistics from "../../components/homepage/Statistics";

const getFriends = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const friendsPromise = getFriends();

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Statistics></Statistics>
      <Friends friendsPromise={friendsPromise}></Friends>
    </div>
  );
};

export default Homepage;
