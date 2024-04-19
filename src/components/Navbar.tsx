import { Search } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar: React.FC = () => {
  return (
    <header className="py-2 px-3 border-b border-gray-400">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-5">
        <div className="">
          <Image src="/soldold.svg" alt="logo" width={80} height={80} />
        </div>

        {/* <div className="w-full border border-gray-400 rounded-lg flex items-center gap-2 sm:pr-3"> */}
        <div className="w-full relative">
          <Input
            type="text"
            className="py-2 pl-2 pr-10 w-full outline-none border-2 border-gray-400 rounded-lg hover:border-amber-400 transition-all focus-visible:ring-0 ring-0"
            placeholder="Search For Mobile accessories & More"
          />
          <Search className="hidden sm:block absolute top-2 right-2" />
        </div>

        <Button className="bg-blue-500 w-32 rounded-lg">Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
