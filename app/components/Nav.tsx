import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  
  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">SendIt.</h1>
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