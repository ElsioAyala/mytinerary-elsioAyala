import Button from "./Button";

export default function CardSearch({city, country, image, id}) {
    return (
        <div className="relative w-full rounded-lg overflow-hidden mb-6 sm:m-0">
            <div className="relative z-10 flex justify-between text-white sm:flex-col sm:h-full">
                <div className="mx-3 my-4">
                    <h3 className="text-2xl">{city}</h3>
                    <div className="flex">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                        </span>
                        <p className="">{country}</p>
                    </div>
                </div>
                <div className="my-auto mx-3 sm:mb-4">
                    <Button 
                    text="View More"
                    customStyle="text-sm lg:text-base lg:font-bold"
                    padding="py-[0.6em] px-[1.2em]"
                    link={id}
                    />
                </div>
            </div>


            <img src={image} alt="image" className="object-cover w-full h-full absolute top-0 bottom-0 brightness-50 sm:brightness-75" />
        </div>
    )
}
