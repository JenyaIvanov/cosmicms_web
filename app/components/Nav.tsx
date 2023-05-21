'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Roboto_Slab } from "next/font/google"

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["200", "500", "700"],
  variable: "--font-roboto_slab",
})

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  
  return (
    <nav>
    <div className="flex justify-between items-center w-full z-10">
    <Link href={process.env.navMainLink}>
      <div className="flex flex-row gap-0 items-center xl:scale-150 md:scale-125 scale-90 p-2 -mx-[1.5rem] md:ms-2 xl:ms-6">
        {/* Server Logo */}
          <Image 
            className="object-contain drop-shadow-sm xl:ms-4"
            src={"/img/logo.png"}
            width={110}
            height={110}
            alt="Logo"
          />
          
          {/* Server Title */}
          <h1 className={`font-bold text-6xl -mx-[6vh] text-white drop-shadow-xl ${roboto.variable} font-sans`}>{process.env.serverName}</h1>
          
          {/* Logo Art */}
          <Image 
            className="object-contain md:ms-8 mb-[5rem] md:-mb-2 drop-shadow-lg"
            src={"/img/logoArt.png"}
            width={900/11}
            height={585/11}
            alt="Logo Art"
          />
      </div>
    </Link>
    <div className="md:hidden flex items-center ms-11">
      {/* Burger Menu Icon */}
      <button onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" className="text-white font-bold" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
    </div>

    {/* Desktop Menu  */}
    <ul className="hidden md:flex items-center gap-6 text-white p-2 px-3 rounded-md bg-slate-400 bg-opacity-50 shadow-md ">
      <Link href={process.env.navDownloadLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-yellow-400 py-1.5 px-2.5 drop-shadow-xl">
          <li>Download</li>
      </Link>
      <Link href={process.env.navVoteLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-yellow-400 py-1.5 px-2.5 drop-shadow-xl">
          <li>Vote</li>
      </Link>
      <Link href={process.env.navRegisterLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-yellow-400 py-1.5 px-2.5 drop-shadow-xl">
          <li className="font-bold">Register</li>
      </Link>
    </ul>
    </div>


    {/* Mobile Menu  */}
    {isOpen ?
      (
        <div className="md:hidden mb-2">
        <ul className="max-h-full max-w-12 gap-6 text-white p-2 px-3 rounded-md bg-slate-400 bg-opacity-50 shadow-md ">
          <Link href={process.env.navDownloadLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
              <li>Download</li>
          </Link>
          <Link href={process.env.navVoteLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
              <li>Vote</li>
          </Link>
          <Link href={process.env.navRegisterLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
              <li className="font-bold">Register</li>
          </Link>


        {/* Mobile Footer */}
        <hr className="mt-2 mb-2 opacity-30" />
          <li>
                  <Link href={process.env.footerDiscordLink} className="rounded-md pt-4 px-1.5 flex items-center">
                    <Image src={"/img/discordLogo.png"} className=" object-contain drop-shadow-lg rounded-lg opacity-50 hover:opacity-100 hover:scale-110" alt={"Discord Logo"} height={40} width={40} />
                    <span className="mx-2 px-2 font-serif">Join Our Discord!</span>
                  </Link>
          </li>
          <li>
          <span className="text-sm text-gray-900 sm:text-center opacity-50 block rounded-md py-1.5 px-2.5">© 2023 {process.env.serverName}. All Rights Reserved.</span>
          </li>

        </ul>
      </div>
      ) : ""
    }
    </nav>      
  

  )
}