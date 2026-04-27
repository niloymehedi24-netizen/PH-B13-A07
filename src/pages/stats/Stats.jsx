import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../../context/Context";

const Stats = () => {
  const { timelineData } = useContext(TimelineContext);

  const data = [
    { name: "call", value: timelineData.length, fill: "#0088FE" },
    { name: "text", value: "", fill: "#00C49F" },
    { name: "video", value: "", fill: "#FFBB28" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-bold text-3xl">Friendship Analytics</h2>
      <div className="m-15 shadow p-10 border border-slate-300 container rounded-md">
        <p className="mt-4">By Interaction Type</p>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
            margin: "auto",
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
