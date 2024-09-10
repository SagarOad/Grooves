import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import CardsSection from "@/sections/CardsSection";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Locate from "@/sections/Locate";
import MoreInfo from "@/sections/MoreInfo";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="main-gradient">
        <MoreInfo />
        <Slider />
        <CardsSection />
        <Experience />
        <Locate  />
        <Footer />
      </div>
    </div>
  );
}
