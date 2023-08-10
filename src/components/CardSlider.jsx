
function CardSlider({city, country, image}) {
  return (
    <div className="w-40 sm:w-52 lg:w-72 max-h-96 relative rounded-md overflow-hidden">
        <a href="#" className="">
            <img src={`${image}`} alt="image" className="object-cover w-full h-full"/>
            <div className="absolute bottom-0 z-40 w-full [&>p]:text-center [&>p]:font-normal text-white bg-black bg-opacity-60 py-2">
                <p className="text-2xl lg:text-3xl">{city}</p>
                <p className="">{country}</p>
            </div>
        </a>
    </div>
  )
}

export default CardSlider