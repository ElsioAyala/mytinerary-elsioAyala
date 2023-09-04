import CardSearch from "./CardSearch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../redux/citySlice";

export default function GridCities() {
  const { cities, isLoading } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="mx-auto mt-40 w-12">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-10 2xl:px-0 pb-24">
        <div>
          {cities !== undefined && cities.length == 0 && (
            <div className="flex items-start justify-center">
              <img src="/assets/images/search-cross.png" className="w-6 mr-3" />
              <p>No results found</p>
            </div>
          )}

          <div className="searchGrid">{cities !== undefined && cities.map((city, key) => <CardSearch key={key} city={city.city} country={city.country} image={city.image} id={city._id} />)}</div>
        </div>
      </div>
    </section>
  );
}
