import type { Metadata } from "next";
import longwalletProducts from "@/data/longwalletProducts";
import WholeProductDetail from "@/components/WholeProductDetail";
import JsonLd from "@/components/JsonLd";
import LcpPreload from "@/components/LcpPreload";
import {
  breadcrumbJsonLd,
  productJsonLd,
  productMetadata,
} from "@/lib/seo";
import {
  findProductByParam,
  productHref,
  productSlug,
} from "@/lib/productSlug";

type Props = { params: Promise<{ product: string }> };

export function generateStaticParams() {
  return longwalletProducts.map((item) => ({
    product: productSlug(item.title),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const item = findProductByParam(longwalletProducts, product);
  return productMetadata(item, "longwallet", "Traveller Wallet");
}

export default async function LongwalletProductPage({ params }: Props) {
  const { product } = await params;
  const item = findProductByParam(longwalletProducts, product) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "longwallet", "Traveller Wallet"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Traveller Wallets", path: "/longwallet" },
              { name: item.title, path: productHref("longwallet", item) },
            ]),
          ]}
        />
      )}
      <LcpPreload href={item?.image[0]} />
      <WholeProductDetail products={item} />
    </>
  );
}
