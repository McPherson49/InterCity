import Compare from "../components/Compare";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import TravelTips from "../components/TravelTips";

const Homepage = () => {
  return (
    <div className=" w-full font-mulish">
      <div className=" w-full px-4 md:px-16 lg:px-48">
        <Nav />
        <Hero />
        <Compare />
        <TravelTips />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
