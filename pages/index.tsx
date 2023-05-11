import Image from "next/image";

export default function Home() {
  return (
      <div className="rounded-md p-2 bg-slate-600 bg-opacity-30 shadow-md text-white">
        <h1 className=" text-3xl font-bold drop-shadow-lg"></h1>
        <div className="flex mt-4">
                <Image src={"/img/Shadower.png"} alt={"Logo"} width={150} height={150} />
                <p>
                  Main page! CosmicMS Hype :D
                </p>
            </div>  
      </div>
  )
}
