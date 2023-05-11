import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  
  return (
    <nav className="flex justify-between items-center">
      <Link href={"/"}>
        <Image 
          src={"/img/logo.png"}
          width={100}
          height={100}
          alt="Logo"
        />
        <h1 className="font-bold text-3xl">CosmicMS</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <Link href={"/"}>
            <li>News</li>
        </Link>
        <Link href={"/"}>
            <li>Download</li>
        </Link>
        <Link href={"/"}>
            <li>Discord</li>
        </Link>
        <Link href={"/"}>
            <li className="font-bold">Register</li>
        </Link>
      </ul>

    </nav>
  )
}