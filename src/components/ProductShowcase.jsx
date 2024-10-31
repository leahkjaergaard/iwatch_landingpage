import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CgBorderStyleDotted } from "react-icons/cg";

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-[50%_40%_10%] max-w-7xl mx-auto mt-20 mb-20 h-full relative">
      <div>
        <div className="text-white grid text-6xl mb-20 mt-20">
          <h1 className="font-black">The Perfect Moment</h1>
          <h1 className="font-100">Between Past And Future.</h1>
        </div>
        <div className="my-8">
          <button className="text-white border-solid border-2 rounded-full text-lg p-3 inline-block px-14 hover:bg-white hover:text-[#B6CCDA] hover:border-white transition mt-12">Buy Now</button>
        </div>
        <div className="absolute left-4 bottom-4 flex items-center text-white">
          <FaArrowLeft className="text-2xl hover:scale-125 transition-transform duration-300" />
          <p className="px-4 font-bold">1</p>
          <FaArrowRight className="text-2xl hover:scale-125 transition-transform duration-300" />
        </div>
      </div>
      <div className="gap-6">
        <Image src="/navy.png" width={500} height={500} alt="iWatch" className="object-top" />
        <div className="flex gap-6">
          <div className="relative flex justify-center items-start">
            <Image src="/navy.png" width={150} height={150} alt="iWatch" className="absolute top-5" />
            <div className="bg-[#434558] w-48 h-24 rounded-lg mt-20"></div>
          </div>

          <div className="relative flex justify-center items-start">
            <Image src="/mint.png" width={150} height={150} alt="iWatch" className="absolute top-5" />
            <div className="bg-[#6ADDCC] w-48 h-24 rounded-lg mt-20"></div>
          </div>

          <div className="relative flex justify-center items-start">
            <Image src="/ocean.png" width={150} height={150} alt="iWatch" className="absolute top-5" />
            <div className="bg-[#F9CDC4] w-48 h-24 rounded-lg mt-20"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-40">
        <div className="bg-[#434558] cursor-pointer border-2 rounded-full w-6 h-6 hover:scale-125 mb-1"></div>
        <CgBorderStyleDotted className="rotate-90 text-white mb-1" />
        <div className="bg-[#6ADDCC] cursor-pointer border-2 rounded-full w-6 h-6 hover:scale-125 mb-1"></div>
        <CgBorderStyleDotted className="rotate-90 text-white mb-1 w-9" />
        <div className="bg-[#F9CDC4] cursor-pointer border-2 rounded-full w-6 h-6 hover:scale-125"></div>
      </div>
    </div>
  );
};

export default ProductShowcase;
