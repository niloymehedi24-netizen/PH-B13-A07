import { GoPlus } from "react-icons/go";

const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto space-x-5 text-center items-center mt-20 mb-10">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-600 font-normal">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <div className="flex justify-center items-center text-center gap-1">
          <button className="flex items-center border p-2 text-white bg-green-900 rounded-md hover:cursor-pointer">
            <GoPlus></GoPlus>Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
