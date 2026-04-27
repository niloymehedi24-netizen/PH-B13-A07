const Statistics = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-3 items-center text-center space-y-2">
      <div className="border border-zinc-200 shadow-lg rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">10</p>
        <p className="font-light text-gray-600">Total Friends</p>
      </div>
      <div className="border border-zinc-200 shadow-lg rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">4</p>
        <p className="font-light text-gray-600">On Track</p>
      </div>
      <div className="border border-zinc-200 shadow-lg rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">5</p>
        <p className="font-light text-gray-600">Need Attention</p>
      </div>
      <div className="border border-zinc-200 shadow-lg rounded-md  p-9.5">
        <p className="font-bold text-xl text-green-900">12</p>
        <p className="font-light text-gray-600">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Statistics;
