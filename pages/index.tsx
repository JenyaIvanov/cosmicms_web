import Image from "next/image";

export default function Home() {
  return (
      <div className="rounded-md p-2 bg-slate-600 bg-opacity-30 shadow-md text-white drop-shadow-lg">
        <h1 className=" text-3xl font-bold drop-shadow-lg">Test</h1>
        <div className="flex mt-4">
                <p className="md:ms-8">
                  Welcome to {process.env.serverName}.
                </p>
            </div>  
            <div className="md:-mx-8 mt-8">
                    <Image src={"/img/Sprite.png"} className="md:scale-150 m-3" alt={"Logo"} width={317/2.5} height={341/2.5} />
            </div>
      </div>
  )
}
