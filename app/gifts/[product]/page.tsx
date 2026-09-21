import type { Metadata } from "next";
import giftProducts from "@/data/giftProducts";
import WholeProductDetail from "@/components/WholeProductDetail";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  productJsonLd,
  productMetadata,
} from "@/lib/seo";

type Props = { params: Promise<{ product: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const item = giftProducts.find((p) => p.id === parseInt(product, 10));
  return productMetadata(item, "gifts", "Gift");
}

export default async function GiftProductPage({ params }: Props) {
  const { product } = await params;
  const item = giftProducts.find((p) => p.id === parseInt(product, 10)) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "gifts", "Gift"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Gifts", path: "/gifts" },
              { name: item.title, path: `/gifts/${item.id}` },
            ]),
          ]}
        />
      )}
      <WholeProductDetail products={item} />
    </>
  );
}
