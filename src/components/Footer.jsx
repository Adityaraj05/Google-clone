import CountryLookup from "./CountryLookup";
import { GlobeIcon } from '@heroicons/react/solid';

export default function Footer() {
  return (
    <footer className="absolute bottom-10 text-sm text-gray-500 bg-[#f2f2f2] w-full">
    
      <div className=" px-8 py-3">
       <p className="link"><CountryLookup /></p> 
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense'>
        <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
           <GlobeIcon className='h-5 mr-1 text-green-700' /> <p className='link'>Carbon netural since 2007</p>
        </div>
        <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
            <p className="link">Advertising</p>
            <p className="link">Business</p>
            <p className="link">How Search works</p>
        </div>
        <div className='flex justify-center space-x-8 md:ml-auto '>
        <p className="link">Privacy</p>
        <p className="link">Terms</p>
        <p className="link">Settings</p>
       </div>
    </div>
      
    </footer>
  )
  }


