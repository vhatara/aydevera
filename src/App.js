import './App.css';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import WorkedWith from './sections/WorkedWith';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Services />
      <WhyUs />
      <WorkedWith />
      <Footer />
    </div>
  );
}

export default App;
