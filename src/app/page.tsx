import Hero from "@/components/Home/Hero";
import ProductFeature from "@/components/Home/ProductFeature";
import SeasonalSelections from "@/components/Home/SeasonalSelections";
import CardContainer from './../components/Home/CardContainer';
import FooterHero from "@/components/Home/FooterHero";
import ShopTheLook from "@/components/ShopTheLook";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Hero />
      {/* <FilterSidebar /> */}
      {/* <PriceRangeSlider /> */}
      <ProductFeature />
      <SeasonalSelections />
      <CardContainer />
      <ShopTheLook />
      <FooterHero />
    </div>
  );
}
