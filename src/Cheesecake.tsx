const Cheesecake = () => {
  return (
    <div className=" flex justify-center h-[300px]  rounded-4xl overflow-hidden max-w-[1200px] mx-auto px-2 ">
      <div
        style={{
          backgroundImage: "url('/red-background.jpg')",
          //   backgroundColor: "rgba(255,255,255,0.8)", // overlay color
          //   backgroundBlendMode: "overlay", // or multiply, soft-light, etc.
        }}
        className="flex flex-col items-center justify-center p-5 w-[50%] gap-8"
      >
        <text className="text-center caveat-cursive font-extrabold text-white text-4xl ">
          'Decandant <br /> Cheesecake'
        </text>
        <button className="border text-amber-50 border-amber-50 rounded-full py-[4px]  px-8 hover:bg-amber-50 hover:text-red-600 transition duration-300    ">
          Explore
        </button>
      </div>
      <div className="w-[50%] h-full">
        {" "}
        <img
          className="h-full w-full object-cover bg-blue-50"
          src="/cheesecake.jpg"
          alt="Vite logo"
        />
      </div>
    </div>
  );
};

export default Cheesecake;
