import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { HashLink as Anchor } from "react-router-hash-link";

import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../redux/citySlice";
import NoItineraries from "../components/NoItineraries";
import Itinerary from "../components/Itinerary";

export default function CityDetails() {
  let { id } = useParams();

  /*const [city, setCity] = useState([]);*/

  const { city, isLoading } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity(id));
    window.scrollTo({ top: 0 });
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="mx-auto mt-40 w-12">
        <span className="loader"></span>
      </div>
    );
  }

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
      <section id="itineraries" className="relative scroll-smooth min-h-screen flex flex-col mx-2 ">
        <h2 className="text-center my-9 text-3xl">Itineraries</h2>
        <div className="last:mb-10">{city._itineraries !== undefined && city._itineraries.map((itinerary, key) => <Itinerary key={key} id={itinerary._id} title={itinerary.title} image={itinerary.image} name={itinerary.nameUser} photo={itinerary.photoUser} price={itinerary.price} duration={itinerary.duration} likes={itinerary.likes} hashtags={itinerary.hashtags} />)}</div>

        {city._itineraries !== undefined && city._itineraries.length == 0 ? <NoItineraries /> : null}
      </section>
    </main>
  );
}
