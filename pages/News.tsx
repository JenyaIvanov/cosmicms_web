import { time } from "console";
import Image from "next/image";
import Link from "next/link"

export default function News() {
    return (
        <div className="rounded-md p-2 bg-slate-600 bg-opacity-30 shadow-md text-white drop-shadow-lg">
            <h1 className=" text-3xl font-bold drop-shadow-lg">News</h1>
            <div className="flex mt-4">
                <Image src={"/img/PinkBean.png"} alt={"Logo"} width={150} height={150} />
                <p>This is a really long text to text out how this will look like. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum amet iure animi excepturi quisquam voluptatum a ipsam perferendis eius ea explicabo delectus, 
                        aspernatur obcaecati non minima veniam reiciendis culpa eveniet?
                </p>
            </div>  
            <hr />
            <div className="mt-4 flex">
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
                
            </div>           
        </div>
    );
  }