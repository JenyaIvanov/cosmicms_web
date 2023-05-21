import { time } from "console";
import Image from "next/image";
import { IconName } from "react-icons/ai";
import Link from "next/link"

export default function Download() {
    return (
        <div className="p-2 rounded-md bg-gray-600 bg-opacity-70 shadow-md text-white drop-shadow-lg mt-5 md:p-5">

                {/* Header Section */}
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
            <hr className="mt-3 mb-3 drop-shadow-md" />

                {/* Download Section */}
            <div>

                {/* Supported Systems */}
                <div className="flex items-center">
                    Supported Systems:
                    <div className="flex">
                            {/* Windows Support */}
                        <div className="ms-2 bg-slate-800 rounded-md p-2 flex items-center drop-shadow-md gap-1">

                            {/* Windows Icon */}
                            <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                                <path d="M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z" />
                            </svg>
                            Windows
                        </div>

                            {/* Mac Support */}
                            <div className="ms-2 bg-slate-800 rounded-md p-2 flex items-center drop-shadow-md gap-1">

                                {/* Windows Icon */}
                                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                                    <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
                                </svg>
                                Mac
                            </div>
                    </div>
                </div>

                {/* Download Links */}
                <div className="mt-1 flex items-center">
                    Download Client:
                    <div className="gap-1 items-center pt-2 pb-2">
                        {/* Mirrors */}
                       <button>
                            <div className="ms-2 mt-1 bg-slate-800 rounded-md p-2 flex items-center drop-shadow-md gap-1 hover:text-yellow-300 hover:outline-dashed hover:outline-2">
                                {/* Client Icon */}
                                <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                                    <path d="M7 6h10a6 6 0 016 6 6 6 0 01-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 01-6-6 6 6 0 016-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9H6m9.5 3a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5m3-3a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0018.5 9z" />
                                </svg>
                                Mirror
                            </div>
                       </button>

                       <button>
                            <div className="ms-2 mt-1 bg-slate-800 rounded-md p-2 flex items-center drop-shadow-md gap-1 hover:text-yellow-300 hover:outline-dashed hover:outline-2">
                                {/* Client Icon */}
                                <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                                    <path d="M7 6h10a6 6 0 016 6 6 6 0 01-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 01-6-6 6 6 0 016-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9H6m9.5 3a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5m3-3a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0018.5 9z" />
                                </svg>
                                Mirror
                            </div>
                       </button>

                       <button>
                            <div className="ms-2 mt-1 bg-slate-800 rounded-md p-2 flex items-center drop-shadow-md gap-1 hover:text-yellow-300 hover:outline-dashed hover:outline-2">
                                {/* Client Icon */}
                                <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                                    <path d="M7 6h10a6 6 0 016 6 6 6 0 01-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 01-6-6 6 6 0 016-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9H6m9.5 3a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5m3-3a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0018.5 9z" />
                                </svg>
                                Mirror
                            </div>
                       </button>
                    </div>
                </div>
            </div>


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