import Search from "./Search";
import CardSearch from "./CardSearch";
import { getCities } from "../services/cityQueries";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCities } from "../redux/citySlice";

export default function GridCities() {
  const [allCities, setAllCities] = useState([]);
  const cities = useSelector((state) => state.city.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    getCities()
      .then((data) => {
        if (data !== undefined) {
          setAllCities(data);
          dispatch(setCities(data));
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <section className="w-full">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-10 2xl:px-0 pb-24">
        <Search allCities={allCities} />
        <div>
          {cities.length == 0 && (
            <div className="flex items-start justify-center">
              <img src="/assets/images/search-cross.png" className="w-6 mr-3" />
              <p>No results found</p>
            </div>
          )}
          <div className="searchGrid">
            {cities.map((city, key) => (
              <CardSearch key={key} city={city.city} country={city.country} image={city.image} id={city._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
