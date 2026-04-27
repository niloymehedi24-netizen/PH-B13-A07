import { useContext } from "react";
import { use } from "react";
import { FiArchive } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useParams } from "react-router";
import { TimelineContext } from "../../context/Context";
import { toast } from "react-toastify";

const FriendDetails = ({ friendsPromise }) => {
  const { id } = useParams();

  const friends = use(friendsPromise);

  const expectedFriend = friends.find((friend) => friend.id == id);

  const { timelineData, setTimelineData } = useContext(TimelineContext);

  const handleContact = (type, userDetails) => {
    const newData = {
      ...userDetails,
      action: type,
      time: new Date().toISOString(),
    };

    setTimelineData([...timelineData, newData]);
    toast.success("Contacted Successfully");
  };

  return (
    <div className="max-w-5xl mx-auto m-12 grid lg:grid-cols-2 gap-4">
      <div>
        <div>
          <div className="w-95 h-90 ml-15 p-5 mb-5 border border-zinc-200 shadow-lg rounded-md">
            <div className="flex items-center justify-center">
              <img
                src={expectedFriend.picture}
                alt=""
                className="h-30 w-30 rounded-full mb-2"
              />
            </div>
            <div className="items-center text-center">
              <h2 className="font-bold mb-4">{expectedFriend.name}</h2>
              <div
                className={`rounded-xl w-25 mb-2 ml-30 ${expectedFriend.status === "overdue" ? "bg-red-500 text-white" : expectedFriend.status === "almost due" ? "bg-yellow-400 text-white" : expectedFriend.status === "on-track" ? "bg-green-900 text-white" : ""}`}
              >
                <p className="items-center text-center">
                  {expectedFriend.status}
                </p>
              </div>
              <div className="text-green-900 bg-green-400 items-center text-center rounded-xl w-25 mb-2 ml-30">
                {expectedFriend.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
              <p className="italic text-gray-600">"{expectedFriend.bio}"</p>
              <p className="text-gray-600">preferred email</p>
            </div>
          </div>
          <div>
            <div className="grid grid-rows-3 gap-4 max-w-95 ml-15">
              <button className="flex items-center text-center justify-center gap-2 shadow-lg rounded-md border border-zinc-200 p-2 hover:cursor-pointer text-[#1F2937]">
                <span>
                  <HiOutlineBellSnooze></HiOutlineBellSnooze>
                </span>
                Snooze 2 weeks
              </button>
              <button className="flex items-center text-center justify-center gap-2 shadow-lg rounded-md border border-zinc-200 p-2 hover:cursor-pointer text-[#1F2937]">
                <span>
                  <FiArchive></FiArchive>
                </span>
                Archive
              </button>
              <button className="flex items-center text-center justify-center gap-2 shadow-lg rounded-md border border-zinc-200 p-2 hover:cursor-pointer text-red-500">
                <span>
                  <RiDeleteBin7Line></RiDeleteBin7Line>
                </span>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around mb-4 gap-2">
          <div className="text-center px-3 py-3 w-55 h-22 gap-4 items-center border border-zinc-200 shadow-lg rounded-md">
            <p className="text-green-900 text-xl font-bold">
              {expectedFriend.days_since_contact}
            </p>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
          <div className="text-center items-center px-3 py-3 gap-4 w-55 h-22 border border-zinc-200 shadow-lg rounded-md">
            <p className="text-green-900 text-xl font-bold">
              {expectedFriend.goal}
            </p>
            <p className="text-gray-500">Goal (Days)</p>
          </div>
          <div className="text-center items-center px-3 py-3 gap-4 w-55 h-22 border border-zinc-200 shadow-lg rounded-md">
            <p className="text-green-900 text-xl font-bold">
              {expectedFriend.next_due_date}
            </p>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
        <div className="flex justify-between border border-zinc-200 shadow-lg rounded-md w-125 mr-10 mb-4 px-10 py-10">
          <div>
            <p className="text-green-900 mb-3">Relationship Goal</p>
            <p className="text-gray-500">
              Connect every
              <span className="font-semibold"> {expectedFriend.goal} days</span>
            </p>
          </div>
          <div className="w-15">
            <button className="p-5 border border-zinc-300 bg-gray-200 shadow-lg rounded-md hover:cursor-pointer">
              Edit
            </button>
          </div>
        </div>
        <div className="border border-zinc-200 shadow-lg rounded-md h-50">
          <p className="text-green-900 p-4">Quick Check-In</p>
          <div className="flex justify-around">
            <div className="border border-zinc-200 bg-gray-200 shadow-lg w-40 h-20 items-center text-center rounded-md pt-5 hover:cursor-pointer">
              <button onClick={() => handleContact("call", expectedFriend)}>
                <LuPhoneCall></LuPhoneCall>Call
              </button>
            </div>
            <div className="border border-zinc-200 bg-gray-200 shadow-lg w-40 h-20 items-center text-center rounded-md pt-5 hover:cursor-pointer">
              <button onClick={() => handleContact("text", expectedFriend)}>
                <MdOutlineTextsms></MdOutlineTextsms>Text
              </button>
            </div>
            <div className="border border-zinc-200 bg-gray-200 shadow-lg w-40 h-20 items-center text-center rounded-md pt-5 hover:cursor-pointer">
              <button onClick={() => handleContact("video", expectedFriend)}>
                <IoVideocamOutline></IoVideocamOutline> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
