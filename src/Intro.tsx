import { useEffect, useState } from "react";

const Intro = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show the text after 1 second
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[calc(100vh-190px)] md:h-[calc(100vh-200px)] 2xl:h-[calc(100vh-320px)] w-screen mt-10 relative">
      {" "}
      <img
        src={"cafe.jpg"}
        className={`relative z-10 h-full w-screen object-cover transition duration-700 ease-in-out  ${
          showText ? "blur-xs " : "blur-none "
        }
        `}
        alt="imgss"
      />
      <div
        className={`absolute z-40 top-0  left-0 w-full flex justify-center h-full  items-center transition duration-700  ease-in-out ${
          showText ? "opacity-100 " : "opacity-0 "
        } `}
      >
        <div className=" relative px-8 mx-16 text-white font-bold epunda-slab-cursive w-fit bg-[rgb(0,0,0,0.85)] py-24 h-[700x] lg:**:px-12   rounded-2xl p-5">
          {" "}
          <img
            src="/gold-vector.png"
            className="absolute -top-9 lg:-left-20 -left-9 h-[200px]"
          />
          <img
            src="/gold-vector.png"
            className="absolute -top-9 -right-9 lg:-right-20 h-[200px] rotate-90"
          />
          <img
            src="/gold-vector.png"
            className="absolute -bottom-9 -right-9 lg:-right-20 h-[200px] rotate-180"
          />
          <img
            src="/gold-vector.png"
            className="absolute -bottom-9 -left-9 lg:-left-20 h-[200px] rotate-270"
          />
          <div className="text-3xl lg:text-6xl w-full text-center text-white">
            Bring Happiness
          </div>
          <span className="text-xl lg:text-4xl block text-center mt-2">
            ' To every person with a great experience '
          </span>
          <span className="h-14 flex justify-center items-end mt-16 lg:mt-24">
            <button className=" bg-amber-500 hover:bg-amber-600 text-white text-lg lg:text-2xl py-2 px-4 rounded-full mx-auto block hover:border hover:border-amber-500">
              Explore Cakes
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
