
export default function Nav({traslate}) {
  return (
    <nav className={`${traslate} bg-white/5 backdrop-blur-xl  transition-transform ease-out duration-500 absolute top-14 left-0 h-[calc(100vh-55px)] w-9/12 flex flex-col  hover:[&>a]:bg-indigo-900/50
    lg:bg-transparent lg:static lg:h-auto lg:backdrop-blur-none lg:w-auto lg:inline-block lg:text-2xl
    `}>
        <a className="px-5 py-2" href="http://">Home</a> 
        <a className="px-5 p-2" href="http://">Cities</a>
    </nav>
  )
}
