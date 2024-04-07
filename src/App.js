import "./App.css";
import Navbar from "./components/Navbar";
import RecommendedCards from "./components/RecommendedCards";
import Category from "./components/Category";
import UpcomingCard from "./components/UpcomingCard";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <div>
      <Navbar/>
      <Category/>
      <HeroSection/>
      <UpcomingCard/>
      <RecommendedCards/>
    </div>
    
  );
}


export default App;
