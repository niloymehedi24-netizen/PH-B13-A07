import { use } from "react";

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-10">
        <h2 className="font-bold text-xl">Your Friends</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="shadow-lg rounded-md border border-zinc-200 p-5"
          >
            <div className="flex items-center justify-center">
              <img
                src={friend.picture}
                alt=""
                className="h-30 w-30 rounded-full mb-2"
              />
            </div>
            <div className="items-center text-center">
              <h2 className="font-bold mb-4">{friend.name}</h2>
              <p className="text-gray-500 mb-2">
                {friend.days_since_contact}d ago
              </p>
              <div className="text-green-900 bg-green-400 rounded-xl w-20 ml-15 mb-2">
                {friend.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
              <p className="text-green-900 bg-green-400 rounded-xl w-20 ml-15">
                {friend.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
