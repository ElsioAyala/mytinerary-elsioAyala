import { useState } from "react";
import { motion } from "framer-motion";
import { like } from "../services/itineraryQueries";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Itinerary({ id, title, image, likes, photo, name, hashtags, duration, price }) {
  const { user, isLogin } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [counterLike, setCounterLike] = useState(0);

  const handleClick = async () => {
    if (isLogin) {
      if (isLike == false) setCounterLike(counterLike + 1);
      else setCounterLike(counterLike - 1);
      setIsLike(!isLike);
    }

    await like({ itinerary_id: id });
  };

  useEffect(() => {
    setCounterLike(likes.length);

    let userLike = likes.filter((like) => {
      return like.includes(user.id);
    });

    if (userLike.length > 0) {
      setIsLike(!isLike);
    }
  }, []);

  const arrayHashtags = hashtags.split(" ");
  const tooltip = isLike ? "Unilike" : "Like";

  let arrayMoney = new Array(price);
  for (let index = 0; index < arrayMoney.length; index++) {
    arrayMoney[index] = (
      <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    );
  }

  return (
    <div className="bg-[#FCFCFF] max-w-2xl w-full mx-auto mb-10 rounded-lg">
      <div className="p-2 sm:p-6 pb-2">
        <h2 className="text-xl md:text-2xl mb-4 text-center">{title}</h2>
        {/*<p className="mb-3 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates reprehenderit tempore maiores libero nulla dolorem dignissimos? Culpa voluptate, nobis ad, accusamus laboriosam neque nulla, qui nam eaque repellendus molestias.</p>*/}
        <div className="h-60 w-full">
          <img src={`${image}`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between h-14 button-wrapper">
          <div className={`w-20 flex items-center  hover:text-red-600 cursor-pointer group confetti-button ${isLike ? "text-red-600" : ""}`} onClick={handleClick} title={`${tooltip}`}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill={`${isLike ? "#EF4444" : "none"} `} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 group-hover:bg-[#ffe0e0] rounded-full transition-colors p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span className="transition-all duration-300 mx-2">{counterLike}</span>
            </motion.button>
          </div>
          <div
            onClick={() => {
              setShow(!show);
            }}
            title="see more">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 transition-all duration-500 h-full my-auto cursor-pointer ${show ? "rotate-180" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        {show && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-clip">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
              <div className="flex flex-col items-center">
                <h3 className="mb-1">User:</h3>
                <div>
                  <img src={`${photo}`} alt="avatar" className="w-11 h-11 rounded-full mt-2 mx-auto" />
                  <p className="font-normal mt-1">{name}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-2">Hashtags:</h3>
                <div className="font-normal text-sky-500 [&>p]:inline-block [&>p]:mr-2">
                  {arrayHashtags.map((hashtag, key) => (
                    <p key={key} className="hover:cursor-pointer hover:underline">
                      {hashtag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-2">Duration:</h3>
                <p className="font-normal">{duration}</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-2">Price:</h3>
                <div className="font-normal flex text-gray-700">{arrayMoney.map((money) => money)}</div>
              </div>
            </div>

            <div className="border h-32  flex justify-center items-center mt-5 font-normal">
              <p>Activitys under construction</p>
            </div>
            <div className="border h-32 flex justify-center items-center my-5 font-normal">
              <p>Comments under construction</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
