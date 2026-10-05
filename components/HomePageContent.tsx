import HomeHero from "@/components/HomeHero";
import HomeBelowFold from "@/components/HomeBelowFold";

const productData = [
  {
    title: "Handcrafted Traveller Wallet",
    imageUrl: "/images/Gemini_Generated_Image_l82ljxl82ljxl82l.webp",
    price: 2400,
    color: "brown",
    link: "/longwallet",
  },
  {
    title: "Classic Bi-Fold Wallet",
    imageUrl: "/images/bf3.webp",
    price: 2900,
    color: "brown",
    link: "/bifoldwallet",
  },
  {
    title: "Everyday Tri-Fold Wallet",
    imageUrl: "/images/Gemini_Generated_Image_3g4hf3g4hf3g4hf3.webp",
    price: 2500,
    color: "brown",
    link: "/trifoldwallet",
  },
  {
    title: "Slim Card Holder",
    imageUrl: "/images/4.webp",
    price: 1800,
    color: "brown",
    link: "/cardholder",
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
