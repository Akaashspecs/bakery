import { MdOutlineArrowForwardIos } from "react-icons/md";
import { images, products } from "./data";

const Products = () => {
  return (
    <div className="mb-20   bg-repeat ">
      <div
        style={{
          backgroundImage: "url('/bakery.jpg')",
          backgroundColor: "rgba(255,255,255,0.8)", // overlay color
          backgroundBlendMode: "overlay", // or multiply, soft-light, etc.
        }}
        className="h-full  bg-repeat backdrop-blur-3xl flex flex-col justify-center items-center py-5"
      >
        <h5 className="text-4xl lg:text-5xl font-extrabold relative text-amber-800 flex flex-col justify-center items-center mt-20 mb-1">
          <div className=" indie-flower-regular font-semibold">You'll Love</div>
          <div className="indie-flower-regular">OUR PRODUCTS</div>
          <img
            src={"/cupcake-jump.gif"}
            alt="cupcake"
            className="h-[150px] absolute top-12 lg:top-[74px]"
          />
        </h5>
        <div className="flex justify-center items-center mt-20">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  mx-10 mb-20 w-auto flex-wrap">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex border relative rounded-2xl h-[100px] md:h-auto overflow-hidden py-5 pl-14 pr-14 md:pr-0 justify-between  md:max-w-[400px] bg-white hover:border-2 hover:bg-amber-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:grow items-center justify-around">
                  <div className="text-xl md:text-3xl text-center">
                    {" "}
                    {product.name}
                  </div>
                  <div> {product.type}</div>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="md:h-[150px]  relative left-6 -top-5 md:top-0 md:left-0  h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full ">
        <div className="flex animate-reverseSlide  border-y border-black epunda-slab-cursive">
          {Array(1000)
            .fill(0)
            .map((_, i) => (
              <MdOutlineArrowForwardIos className="text-amber-400 font-extrabold mx-1" />
            ))}
        </div>
      </div>

      <div className="overflow-hidden w-full ">
        <div className="flex animate-slide py-11">
          {images.concat(images).map((src, i) => (
            <img
              key={i}
              src={src}
              alt="slide"
              className="h-40 w-40 mx-3  object-cover rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full ">
        <div className="flex animate-reverseSlide  border-y border-black epunda-slab-cursive ">
          {Array(1000)
            .fill(0)
            .map((_, i) => (
              <MdOutlineArrowForwardIos className="text-amber-400 font-extrabold mx-1" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
