import { useState, useEffect } from "react";
import ViewSlider from "./ViewSlider";

const data = [
  { city: "Tokio", country: "Japan", image: "/assets/images/tokio.jpg" },
  { city: "New York", country: "USA", image: "/assets/images/new-york.jpg" },
  { city: "Paris", country: "France", image: "/assets/images/paris.jpg" },
  { city: "Seoul", country: "South Korea", image: "/assets/images/seoul.jpg" },
  { city: "Madrid", country: "Spain", image: "/assets/images/madrid.jpg" },
  {
    city: "Bangkok",
    country: "Thailand",
    image: "/assets/images/bangkok.jpg",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    image: "/assets/images/buenos-aires.jpg",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    image: "/assets/images/amsterdam.jpg",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "/assets/images/londres.jpg",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    image: "/assets/images/dubai.jpg",
  },
  { city: "Rome", country: "Itali", image: "/assets/images/roma.jpg" },
  {
    city: "Rio de Janeiro",
    country: "Brasil",
    image: "/assets/images/rio.jpg",
  },
];

let arrComp = [];
for (let i = 0; i < data.length; i += 4) {
  let subarr = data.slice(i, i + 4);
  arrComp.push(subarr);
}

export default function Carousel() {
  const [curr, setCurr] = useState(2);

  const prev = () => setCurr((curr) => (curr === 0 ? arrComp.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === arrComp.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="max-w-6xl h-full relative md:px-24 px-36 pb-12 ">
      <div className="overflow-hidden relative h-full w-[340px] sm:w-[436px] lg:w-[596px]">
        <div className="flex h-full transition-transform ease-out duration-1000" style={{ transform: `translateX(-${curr * 100}%)` }}>
          {arrComp.map((arr, key) => (
            <ViewSlider key={key} arr={arr} />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-1 z-50 inset-0 flex items-end md:items-center justify-between mx-auto w-72 md:w-auto">
        <button onClick={prev} className="text-white bg-black rounded-full p-2 md:-mt-1 lg:mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button onClick={next} className="text-white bg-black rounded-full p-2 md:-mt-11 lg:mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 lg:bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {arrComp.map((_, i) => (
            <div key={i} className={`transition-all w-7 h-1 bg-white ${curr === i ? "" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
