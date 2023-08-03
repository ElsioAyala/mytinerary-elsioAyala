import Footer from "../components/Footer";
import Header from "../components/Header";

export default function layout({children}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
