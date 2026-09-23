import type { Metadata } from "next";
import longwalletProducts from "@/data/longwalletProducts";
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
  const item = findProductByParam(longwalletProducts, product);
  return productMetadata(item, "longwallet", "Long Wallet");
}

export default async function LongwalletProductPage({ params }: Props) {
  const { product } = await params;
  const item = findProductByParam(longwalletProducts, product) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "longwallet", "Long Wallet"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Long Wallets", path: "/longwallet" },
              { name: item.title, path: productHref("longwallet", item) },
            ]),
          ]}
        />
      )}
      <WholeProductDetail products={item} />
    </>
  );
}
