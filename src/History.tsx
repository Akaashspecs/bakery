const History = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] flex flex-col justify-center items-center lg:flex-row mt-10 mx-5  ">
        <div className="w-[40%] flex justify-center items-center ">
          <img
            src="/sydney-opera-house.png"
            alt="baker"
            className=" rounded-2xl object-cover "
          />
        </div>

        <div className=" flex flex-col w-[90%] gap-4 p-5">
          <div className=" text-4xl font-semibold text-center lg:text-left ">
            History Of A<br />
            <span className="text-orange-400"> Australian Baker</span>
          </div>
          <p className="text-base font-semibold text-gray-600 text-center lg:text-left">
            A journey through the life and times of a passionate baker in
            Australia.
          </p>
          <p className="text-[14px] text-gray-600 text-center lg:text-left">
            Discover the rich history, cultural influences, and personal stories
            that have shaped the art of baking in this diverse country.Today, we
            continue to spread joy through our delectable range of artisanal
            breads, pastries, and cakes each crafted with love. Join us in
            celebrating the timeless tradition of baking that brings people
            together, one delicious bite at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
