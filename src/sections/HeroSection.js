import NavBar from "../components/NavBar"

const HeroSection = () => {
  return (
    <header id='home'>
        <NavBar />

        <div className="banner-div text-center">
          <h1 className="text-white">Professional Aircon Technicians</h1>
          <p>Affordable, trustworthy and seasoned technicians at your doorstep!</p>
          <button className="book-btn" >Book Now</button>
        </div>
    </header>
  )
}

export default HeroSection