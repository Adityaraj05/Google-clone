import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
import Avatar from './Avatar';

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between space-x-4">
        <Link href={"/"}>
          <Image
            width="150"
            height="50"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-4 ">
          <RiSettings3Line className="header-icon  space-x-4 " />
          <TbGridDots className="header-icon bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2" />
        </div>
        <Avatar className="ml-auto " url="https://yt3.ggpht.com/M9SMtoHULi1LF3DvkJ6PeVInfEwWyhjBU6Drf-Z9kmqRc6SWoYfY4rOhe2n9SQ26qPTn3u_odqI=s88-c-k-c0x00ffffff-no-rj-mo" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
