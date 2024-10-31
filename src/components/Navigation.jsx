import { IoLogoApple } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { FaBasketShopping } from "react-icons/fa6";

import Button from "./Button";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between rounded-lg py-4 max-w-7xl mx-auto">
      <div>
        <IoLogoApple size={50} color="white" className="cursor-pointer" />
      </div>

      <div className="text-white">
        <ul className="flex space-x-6 gap-x-12">
          <Button text="Mac" link="#" />
          <Button text="iPhone" link="#" />
          <Button text="iPad" link="#" />
          <Button text="iWatch" link="#" />
          <Button text="Support" link="#" />
        </ul>
      </div>

      <div className="flex space-x-4">
        <div>
          <TfiSearch size={25} color="white" className="cursor-pointer hover:scale-125 transition-transform duration-300" />
        </div>
        <div className="w-px h-6 bg-white"></div>
        <a href="#">
          <FaBasketShopping size={25} color="white" className="cursor-pointer hover:scale-125 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
