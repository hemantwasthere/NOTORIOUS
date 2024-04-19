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

        <div className="w-full border border-gray-400 rounded-lg flex items-center gap-2 sm:pr-3">
          <Input
            type="text"
            className="py-2 px-2 w-full border-none outline-none rounded-l-lg sm:rounded-r-none"
            placeholder="Search For Mobile accessories & More"
          />
          <Search className="hidden sm:block" />
        </div>

        <Button className="bg-blue-500 w-32 rounded-lg">Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
