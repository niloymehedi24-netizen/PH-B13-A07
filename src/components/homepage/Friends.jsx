import { use } from "react";

const friendsPromise = fetch("/public/data.json").then((res) => res.json());

const Friends = () => {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div className="max-w-5xl mx-auto mt-15">
      <h2 className="text-xl font-bold">Your Friends</h2>
    </div>
  );
};

export default Friends;
