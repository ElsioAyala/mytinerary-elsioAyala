import CardSearch from "./CardSearch";
import { getCities } from "../services/cityQueries";
import { useState, useEffect, useRef } from "react";

export default function SearchCity() {
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [search, setSearch] = useState("");
  const [isSuportSpeech, setIsSuportSpeech] = useState(false);
  const [isActivateVoice, setIsActivateVoice] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    getCities()
      .then((data) => {
        if (data !== undefined) {
          setCities(data);
          setAllCities(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handlerSubmitted = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (input.current.value) {
      const queryParams = "?name=" + input.current.value;
      getCities(queryParams)
        .then((data) => {
          if (data !== undefined) {
            setCities(data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCities(allCities);
    }
  };

  const activateVoice = () => {
    setIsActivateVoice(true);
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      setIsActivateVoice(false);
      const resultText = event.results[event.results.length - 1][0].transcript;
      const text = resultText.replace(/\.$/, "");
      setSearch(text);
    };

    recognition.onerror = () => {
      setIsActivateVoice(false);
    };

    recognition.start();
  };

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      setIsSuportSpeech(true);
    }
    const boton = document.getElementById("boton");
    boton.click();
  }, [search]);

  return (
    <section className="w-full">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-10 2xl:px-0 pb-24">
        <form id="form" className="flex items-center lg:w-[680px] mx-auto my-10" onSubmit={handlerSubmitted}>
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              ref={input}
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              id="voice-search"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-indigo-500 block w-full pl-10 p-2.5  "
              placeholder="Search your city..."
            />
            {isSuportSpeech ? (
              <button onClick={activateVoice} type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                <svg className={`w-4 h-4 text-gray-500  hover:text-gray-900 transition-all duration-500 ${isActivateVoice ? "text-red-700 bg-[#ffe0e0] p-1 h-7 w-7 rounded-full" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
                </svg>
              </button>
            ) : null}
            <button className="hidden" id="boton">
              enviar
            </button>
          </div>
        </form>
        <div>
          {cities.length == 0 ? (
            <div className="flex items-start justify-center">
              <img src="/assets/images/search-cross.png" className="w-6 mr-3" />
              <p>No results found</p>
            </div>
          ) : null}
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
