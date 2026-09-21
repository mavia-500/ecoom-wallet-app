import type { Metadata } from "next";
import trifoldProducts from "@/data/trifoldProducts";
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
  const item = trifoldProducts.find((p) => p.id === parseInt(product, 10));
  return productMetadata(item, "trifoldwallet", "Tri-Fold Wallet");
}

export default async function TrifoldProductPage({ params }: Props) {
  const { product } = await params;
  const item =
    trifoldProducts.find((p) => p.id === parseInt(product, 10)) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "trifoldwallet", "Tri-Fold Wallet"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Tri-Fold Wallets", path: "/trifoldwallet" },
              { name: item.title, path: `/trifoldwallet/${item.id}` },
            ]),
          ]}
        />
      )}
      <WholeProductDetail products={item} />
    </>
  );
}
