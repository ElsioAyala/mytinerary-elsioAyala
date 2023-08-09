import Button from "./Button";

export default function CardSearch() {
    return (
        <div className="relative w-full rounded-lg overflow-hidden">
            <div className="relative z-10 flex justify-between text-white">
                <div className="mx-3 my-5">
                    <h3 className="text-2xl">Wakatovi</h3>
                    <div className="flex">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                        </span>
                        <p className="">Indonecia</p>
                    </div>
                </div>
                <div className="my-auto mr-3">
                    <Button 
                    text="View More"
                    customStyle="text-sm lg:text-2xl lg:font-bold"
                    />
                </div>
            </div>


            <img src="/amsterdam.jpeg" alt="tokio" className="object-cover w-full h-full absolute top-0 bottom-0 brightness-75" />
        </div>
    )
}
