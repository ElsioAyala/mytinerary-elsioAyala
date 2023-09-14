import { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/userSlice";
import { useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const [toggleMenuUser, setTogglerMenuUser] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handlerSignOut = (event) => {
    event.preventDefault();
    dispatch(signOut());
  };

  return (
    <div className="flex items-center relative">
      <div className="lg:text-2xl font-bold lg:flex lg:items-center" onMouseEnter={() => setTogglerMenuUser(!toggleMenuUser)} onClick={() => setTogglerMenuUser(!toggleMenuUser)}>
        <span className="hidden lg:inline-block">{user.name}</span>
        <img src={user.photo} onError={(e) => (e.target.src = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png")} className="w-8 lg:w-10 rounded-full inline-block lg:ml-5 hover:ring-4 user cursor-pointer ring-indigo-700/30" />
      </div>
      <ul onMouseLeave={() => setTogglerMenuUser(false)} className={`${toggleMenuUser ? "inline-block" : "hidden"} absolute top-10 right-0 lg:top-12 lg:right-3 bg-slate-500 w-48 rounded-md shadow overflow-hidden`}>
        <li className="px-3 py-3 text-sm lg:text-base font-medium flex items-center space-x-2 hover:bg-slate-400 cursor-pointer">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </span>
          <span> Setting </span>
        </li>
        <li className="px-3 py-3 text-sm lg:text-base font-medium flex items-center space-x-2 hover:bg-slate-400 cursor-pointer">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </span>
          <span onClick={handlerSignOut}> Sign Out </span>
        </li>
      </ul>
    </div>
  );
}
