import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layauts/layout";
import Cities from "./pages/Cities";
import CityDetails from "./pages/CityDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "sonner";
import { authenticate } from "./redux/userSlice";
import { useSelector } from "react-redux";

function App() {
  const { isLogin } = useSelector((state) => state.user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cities", element: <Cities /> },
        { path: "/cities/:id?", element: <CityDetails /> },
        { path: "/signin", element: isLogin ? <Navigate to="/" /> : <SignIn /> },
        { path: "/signup", element: isLogin ? <Navigate to="/" /> : <SignUp /> },
      ],
    },
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
