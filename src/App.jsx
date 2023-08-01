import './App.css'

function App() {
  return (
    <>
      <header className="l-container header">
        <p className="logo">
            My Tinerary
        </p>
        <div className="mainNavBar">
          <var>
            <a className="nav-link" href="http://">Home</a> 
            <a className="nav-link" href="http://">Cities</a>
          </var>
          <button className="btn-login">
            login
          </button>
        </div>
      </header>
      <main className="l-container main">
        <div className="main-content">
          <div className="hero">
            <h2 className='hero-title'>Find the perfect destination</h2>
            <p className='hero-description'>
              Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
            </p>
            <button className="hero-btn">
              View More
            </button>
          </div>
          <div className="hero-img">
            <img src="/no-image-available.jpg" alt="imagen"/>
          </div>
          
        </div>
      </main>
      <footer className="footer">

      </footer>
    </>
  )
}

export default App
