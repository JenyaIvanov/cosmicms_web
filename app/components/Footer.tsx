
import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  
  return (
   <div>
        <footer className="rounded-lg m-4 fixed inset-x-0 bottom-0 shadow-md hidden md:block">
            <div className="mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
            <span className="text-sm text-black sm:text-center opacity-50">© 2023  
                <Link href={process.env.navMainLink} className="hover:text-yellow-200 ">
                    {process.env.serverName}
                </Link>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <span className="m-2 text-white opacity-50 text-xl">|</span>
                <li>
                    <Link href={process.env.footerDiscordLink}>
                      <Image src={"/img/discordLogo.png"} className="hover:outline-dashed outline-2 outline-yellow-400 object-contain drop-shadow-sm rounded-md opacity-50 hover:opacity-100 hover:scale-110" alt={"Discord Logo"} height={40} width={40} />
                    </Link>
                </li>
            </ul>
            </div>
        </footer>
   </div>
  )
}