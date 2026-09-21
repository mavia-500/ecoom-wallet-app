import dynamic from "next/dynamic";
import TrustBar from "@/components/TrustBar";
import QuickShop from "@/components/QuickShop";
import LeatherWallet from "@/components/LeatherWallet";
import Collections from "@/components/Collections";
import CraftStory from "@/components/CraftStory";
import HomeReviews from "@/components/HomeReviews";
import FlashSale from "@/components/FlashSale";
import TopSelling from "@/components/TopSelling";
import HeroSlider from "@/components/HeroSlider";

const HomeFAQ = dynamic(() => import("@/components/HomeFAQ"), {
  ssr: true,
  loading: () => null,
});

const productData = [
  {
    title: "Handcrafted Long Wallet",
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
      <HeroSlider />
      <TrustBar />
      <QuickShop />
      <FlashSale />
      <TopSelling />
      <LeatherWallet productData={productData} />
      <Collections />
      <CraftStory />
      <HomeReviews />
      <HomeFAQ />
    </div>
  );
}
