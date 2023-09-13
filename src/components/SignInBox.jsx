import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/userSlice";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export default function SignInBox() {
  const dispatch = useDispatch();
  const handlerSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    dispatch(signIn({ email, password }));

    form.reset();
  };

  const signInWithGoogle = (credentialResponse) => {
    const token = credentialResponse.credential;
    const dataUser = jwt_decode(token);

    const email = dataUser.email;
    const password = dataUser.sub + dataUser.given_name;

    dispatch(signIn({ email, password }));
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 relative z-20 w-screen max-w-md mx-auto my-20 lg:my-28">
      <div className="flex flex-1 flex-col  justify-center  bg-slate-100 p-4 sm:p-10 rounded-lg shadow-md">
        <div className="flex flex-col space-y-2 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
          <p className="text-md md:text-xl">
            New user?{" "}
            <Link to="/signup" className="cursor-pointer text-indigo-700 hover:text-indigo-600">
              Create an account
            </Link>
          </p>
        </div>
        <div className="flex flex-col max-w-md space-y-5">
          <form action="" onSubmit={handlerSubmit} className="flex flex-col max-w-md space-y-5">
            <input type="email" name="email" placeholder="Username" className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-indigo-700 bg-slate-200 rounded-lg font-medium placeholder:font-normal" />
            <input type="password" name="password" placeholder="Password" className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-indigo-700 bg-slate-200 rounded-lg font-medium placeholder:font-normal" />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-indigo-700 hover:bg-indigo-600 text-white">Sing in</button>
          </form>
          <div className="flex justify-center items-center">
            <span className="w-full border border-black"></span>
            <span className="px-4">Or</span>
            <span className="w-full border border-black"></span>
          </div>
          {/*<button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
            <span className="absolute left-4">
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
              </svg>
            </span>
            <span>Sign in with Google</span>
            </button>*/}
          <div className="w-full flex justify-center">
            <GoogleLogin
              text="signin_with"
              onSuccess={signInWithGoogle}
              size="large"
              locale="en_EN"
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
