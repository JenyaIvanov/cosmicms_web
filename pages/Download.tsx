import { time } from "console";
import Image from "next/image";
import Link from "next/link"

export default function Download() {
    return (
        <div className="p-2 rounded-md bg-gray-600 bg-opacity-80 shadow-md text-white drop-shadow-lg mt-5">
            <h1 className="text-6xl -mx-6 mb-2 -mt-5 font-bold drop-shadow-lg p-5 text-center md:text-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-pink-600">
                Download
            </span>
            </h1>
            <div className="md:text-start text-center md:flex mt-4 items-center">
                <div className="">
                    <Image src={"/img/divLine.png"} className="object-contain drop-shadow-sm" alt={"Logo"} height={280} width={734}/>
                </div>
                <div className="mb-2 xl:flex-col xl:text-2xl md:ms-5">
                    <p> Download our client to connect to {process.env.serverName}. </p>
                    <p> You can find download links for game files, patches, and updates. </p>
                    <p> We provide system support information listed below for a smooth gaming experience. </p>  
                </div>
            </div>  
            <hr className="mt-2 drop-shadow-md" />
            {/* <div className="mt-4">
                <ul>
                    <Link href={"/News"} className=" hover:text-yellow-200 block bg-slate-700 rounded-md w-fill p-2 m-2">
                        <li>💡  | Server Update 2.2.33 'The Caverns Update' | 12/05/23</li>
                    </Link>
                    <Link href={"/News"} className=" hover:text-yellow-200 block bg-slate-700 rounded-md w-fill p-2 m-2">
                        <li>⚠️  | Server Maintanance | 21/04/23</li>
                    </Link>
                    <Link href={"/News"} className=" hover:text-yellow-200 block bg-slate-700 rounded-md w-fill p-2 m-2">
                        <li>🚀  | CosmicMS is officialy the number #1 private server! | 19/04/23</li>
                    </Link>
                    <Link href={"/News"} className=" hover:text-yellow-200 block bg-slate-700 rounded-md w-fill p-2 m-2">
                        <li>📰 | April Update, New Cosmetics & Voting Contest | 16/04/23</li>
                    </Link>
                </ul>
            </div>            */}
        </div>
    );
  }