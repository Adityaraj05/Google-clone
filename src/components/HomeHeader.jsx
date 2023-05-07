import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import Avatar from './Avatar';

export default function HomeHeader() {
  return (
    <header className="flex justify-between p-5 text-sm">
    <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
          
        </div>
      <div className="flex space-x-6 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2" />
        <Avatar className="ml-auto" url="https://yt3.ggpht.com/M9SMtoHULi1LF3DvkJ6PeVInfEwWyhjBU6Drf-Z9kmqRc6SWoYfY4rOhe2n9SQ26qPTn3u_odqI=s88-c-k-c0x00ffffff-no-rj-mo" />
      
      </div>
    </header>
  );
}
