import FlashSale from "@/components/FlashSale";
import TopSelling from "@/components/TopSelling";
import LeatherWallet from "@/components/LeatherWallet";
import Collections from "@/components/Collections";
import CraftStory from "@/components/CraftStory";
import HomeReviews from "@/components/HomeReviews";
import HomeFAQ from "@/components/HomeFAQ";

type ProductTeaser = {
  title: string;
  imageUrl: string;
  price: number;
  color: string;
  link: string;
};

/** Server-rendered below-fold home sections — visible without JS for SEO. */
export default function HomeBelowFold({
  productData,
}: {
  productData: ProductTeaser[];
}) {
  return (
    <>
      <FlashSale />
      <TopSelling />
      <LeatherWallet productData={productData} />
      <Collections />
      <CraftStory />
      <HomeReviews />
      <HomeFAQ />
    </>
  );
}
