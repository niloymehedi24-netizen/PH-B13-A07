const Statistics = () => {
  return (
    <div className="grid grid-cols-4 max-w-5xl mx-auto gap-3 items-center text-center space-y-2">
      <div className="border border-transparent shadow-xl rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">10</p>
        <p className="font-light text-gray-600">Total Friends</p>
      </div>
      <div className="border border-transparent shadow-xl rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">3</p>
        <p className="font-light text-gray-600">On Track</p>
      </div>
      <div className="border border-transparent shadow-xl rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">6</p>
        <p className="font-light text-gray-600">Need Attention</p>
      </div>
      <div className="border border-transparent shadow-xl rounded-md  p-10">
        <p className="font-bold text-xl text-green-900">12</p>
        <p className="font-light text-gray-600">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Statistics;
