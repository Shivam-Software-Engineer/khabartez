import Advertisement from "./Home/Advertisement/Advertisement";
import Herosection from "./Home/Herosection/HeroSection";
import CategorySection from "./Home/CategorySection/CategorySection";
import LatestNews from "./Home/LatestNews/LatestNews";
import TrendingNews from "./Home/TrendingNews/TrendingNews";

export default function Home() {
  return (
    <>
     <main>
        <Advertisement />
        <Herosection />
        <CategorySection />
        <LatestNews />
        <TrendingNews />
      </main>
    </>
  );
}
