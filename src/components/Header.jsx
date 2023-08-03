import Button from "./Button"
import Nav from "./Nav"

function Header() {
  return (
    <header className=" w-full mt-5 fixed top-0">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <p className="logo xl:text-3xl font-bold">
            My Tinerary
        </p>
        <div className="mainNavBar ">
          <Nav/>
          <div className="ml-5 inline-block">
            <Button text = "Login"/>
          </div>
        </div>
        </div>
      </header>
  )
}

export default Header
