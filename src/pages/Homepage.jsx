import Compare from "../components/Compare";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import TravelTips from "../components/TravelTips";

const Homepage = () => {
  return (
    <div className=" w-full font-mulish">
      <Nav />
      <div className=" w-full px-4 md:px-12 lg:px-24">
        <Hero />
        <Compare />
        <TravelTips />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
