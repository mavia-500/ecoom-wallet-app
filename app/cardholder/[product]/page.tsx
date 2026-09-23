import type { Metadata } from "next";
import cardholderProducts from "@/data/carholderProducts";
import WholeProductDetail from "@/components/WholeProductDetail";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  productJsonLd,
  productMetadata,
} from "@/lib/seo";
import { findProductByParam, productHref } from "@/lib/productSlug";

type Props = { params: Promise<{ product: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const item = findProductByParam(cardholderProducts, product);
  return productMetadata(item, "cardholder", "Card Holder");
}

export default async function CardholderProductPage({ params }: Props) {
  const { product } = await params;
  const item = findProductByParam(cardholderProducts, product) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "cardholder", "Card Holder"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Card Holders", path: "/cardholder" },
              { name: item.title, path: productHref("cardholder", item) },
            ]),
          ]}
        />
      )}
      <WholeProductDetail products={item} />
    </>
  );
}
