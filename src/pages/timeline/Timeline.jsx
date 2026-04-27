import { useContext } from "react";
import { TimelineContext } from "../../context/Context";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);

  const sortedData = [...timelineData].sort(
    (a, b) => new Date(b.time) - new Date(a.time),
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>

      {sortedData.length === 0 ? (
        <p className="text-gray-500 px-20 py-20 border border-zinc-200 shadow-lg rounded-md items-center text-center text-3xl">
          No Data yet
        </p>
      ) : (
        <div className="space-y-4">
          {sortedData.map((item, index) => {
            const formattedDate = new Date(item.time).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            );

            return (
              <div
                key={index}
                className="p-4 rounded-lg border border-zinc-200 shadow-lg bg-white"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{item.name}</h3>

                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      item.action === "call"
                        ? "bg-blue-100 text-blue-700"
                        : item.action === "text"
                          ? "bg-purple-100 text-purple-700"
                          : item.action === "video"
                            ? "bg-gray-100 text-green-600"
                            : ""
                    }`}
                  >
                    {item.action}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mt-2">{formattedDate}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Timeline;
