import HomeHero from "@/components/HomeHero";
import HomeBelowFold from "@/components/HomeBelowFold";

const productData = [
  {
    title: "Chocolate Cream-Stitch Bifold Card Holder",
    imageUrl: "/assets/cardholder/chocolate-cream-cardholder-v2-1.webp",
    price: 2999,
    color: "Chocolate Brown",
    link: "/cardholder",
  },
  {
    title: "Matte Black Hand-Stitch Bifold Card Holder",
    imageUrl: "/assets/cardholder/matte-black-cardholder-v2-1.webp",
    price: 2999,
    color: "Matte Black",
    link: "/cardholder",
  },
  {
    title: "Burgundy Red-Interior Snap Card Holder",
    imageUrl: "/assets/cardholder/burgundy-snap-cardholder-v2-1.webp",
    price: 2799,
    color: "Burgundy",
    link: "/cardholder",
  },
  {
    title: "NestiCraft Black Passport Holder",
    imageUrl: "/assets/bifold/burgundy-red-stitch-bifold-v2-1.webp",
    price: 5300,
    color: "Black",
    link: "/bifoldwallet",
  },
];

export default function HomePageContent() {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeBelowFold productData={productData} />
    </div>
  );
}
