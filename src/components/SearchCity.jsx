import CardSearch from "./CardSearch";

const data = [
    { id:"1", city: "Tokio", country: "Japan", image: "/tokio.jpeg" },
    { id:"2", city: "New York", country: "USA", image: "/new-york.jpg" },
    { id:"3", city: "Paris", country: "France", image: "/paris.jpg" },
    { id:"4", city: "Seoul", country: "South Korea", image: "/seoul.jpg" },
    { id:"5", city: "Madrid", country: "Spain", image: "/madrid.jpg" },
    { id:"6", city: "Bangkok", country: "Thailand", image: "/bangkok.jpeg" },
    { id:"7", city: "Buenos Aires", country: "Argentina", image: "/buenos-aires.jpeg" },
    { id:"8", city: "Amsterdam", country: "Netherlands", image: "/amsterdam.jpeg" },
    { id:"9", city: "London", country: "United Kingdom", image: "/londres.png" },
    { id:"10", city: "dubai", country: "United Arab Emirates", image: "/dubai.jpeg" },
    { id:"11", city: "Rome", country: "Itali", image: "/roma.jpeg" },
    { id:"12", city: "Rio de Janeiro", country: "Brasil", image: "/rio.jpeg" }
]
export default function SearchCity() {
    return (
        <section className="w-full">
            <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-10 2xl:px-0 pb-24">

                <form className="flex items-center lg:w-[680px] mx-auto my-10">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="voice-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block w-full pl-10 p-2.5  " placeholder="Search your city..." />
                        <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                            <svg className="w-4 h-4 text-gray-500  hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </form>
                <div>
                    <div className="searchGrid">
                        {data.map((city, key) => <CardSearch key={key} city={city.city} country={city.country} image={city.image} id={city.id} />)}
                    </div>

                </div>
            </div>
        </section>
    )
}
