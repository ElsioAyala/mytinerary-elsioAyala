import { Link as Anchor } from "react-router-dom"

export default function NavMain({traslate}) {
  return (
    <nav className={`${traslate} bg-black backdrop-blur-xl  transition-transform ease-out duration-500 absolute top-14 left-0 h-[calc(100vh-55px)] w-9/12 flex flex-col  hover:[&>a]:bg-indigo-900/50
    lg:bg-transparent lg:static lg:h-auto lg:backdrop-blur-none lg:w-auto lg:inline-block lg:text-2xl
    `}>
        <Anchor to={'/'} className="px-5 py-5 border-b border-gray-900 lg:py-2 lg:border-b-0">Home</Anchor> 
        <Anchor to={'cities'} className="px-5 py-5 border-b border-gray-900 lg:py-2 lg:border-b-0">Cities</Anchor>
    </nav>
  )
}
