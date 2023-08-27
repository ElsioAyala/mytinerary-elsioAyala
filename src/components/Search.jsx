import { useState, useEffect } from "react";
import { getCities } from "../services/cityQueries";
import { useDispatch } from "react-redux";
import { setCities } from "../redux/citySlice";

export default function Search({ allCities }) {
  const [isSuportSpeech, setIsSuportSpeech] = useState(false);
  const [isActivateVoice, setIsActivateVoice] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      setIsSuportSpeech(true);
    }
  }, []);

  const handlerSubmit = (event) => {
    event.preventDefault();
    getCitiesSearch();
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
      getCitiesSearch(text);
    };

    recognition.onerror = () => {
      setIsActivateVoice(false);
    };

    recognition.start();
  };

  const getCitiesSearch = (text) => {
    let textSearch = text === undefined ? search : text;
    if (textSearch) {
      const queryParams = "?name=" + textSearch;
      getCities(queryParams)
        .then((data) => {
          if (data !== undefined) {
            dispatch(setCities(data));
          }
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(setCities(allCities));
    }
  };

  return (
    <form id="form" className="flex items-center lg:w-[680px] mx-auto my-10" onSubmit={handlerSubmit}>
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
          type="text"
          /*value={search}*/
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onKeyUp={(e) => {
            e.preventDefault();
            console.log(search);
            if (search === "") {
              getCitiesSearch();
            }
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
      </div>
    </form>
  );
}
