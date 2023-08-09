import Link from 'next/link'

export default function Menu() {
  return (
    <>
      <ul className="flex items-center justify-center gap-5 font-normal text-gray-900">
        <li className="cursor-pointer">Home</li>
        <Link href="">
          <li className="cursor-pointer">Client Side</li>
        </Link>
        <Link href="">
          <li className="cursor-pointer">Server Side</li>
        </Link>
      </ul>
    </>
  )
}
