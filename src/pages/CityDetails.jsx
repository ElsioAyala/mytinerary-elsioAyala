import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import { getCityById } from "../services/cityQueries";
import { HashLink as Anchor } from "react-router-hash-link";
import Itineraries from "../components/itineraries";
import Button from "../components/Button";

export default function CityDetails() {
  let { id } = useParams();

  const [city, setCity] = useState([]);

  useEffect(() => {
    getCityById(id)
      .then((data) => setCity(data))
      .catch((err) => console.log(err));
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <main>
      <Hero title={city.city} text={city.description} styleTitle="text-white lg:text-5xl" styleText="text-gray-100" imgBackground={city.image} height="h-full" isCenter={true}>
        <div className="flex flex-col sm:flex-row">
          <Button text="⬅ Back to Cities" customStyle="w-40  lg:font-bold lg:text-xl xl:text-2xl flex justify-center mr-10 w-60 sm:w-auto bg-gray-500 mb-5 sm:mb-0" padding="py-[0.4em] px-[1.5em]" link={"/cities"} />
          <Anchor to="#itineraries" className="button py-[0.4em] px-[1.5em] button bg-primary-color  text-white transition-colors hover:bg-indigo-900  items-center w-60 sm:w-auto lg:font-bold lg:text-xl  xl:text-2xl flex justify-center">
            View Itineraries ⬇
          </Anchor>
        </div>
      </Hero>
      <Itineraries />
    </main>
  );
}
