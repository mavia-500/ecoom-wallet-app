import type { Metadata } from "next";
import bifoldProducts from "@/data/bifoldProduct";
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
  const item = bifoldProducts.find((p) => p.id === parseInt(product, 10));
  return productMetadata(item, "bifoldwallet", "Bi-Fold Wallet");
}

export default async function BifoldProductPage({ params }: Props) {
  const { product } = await params;
  const item = bifoldProducts.find((p) => p.id === parseInt(product, 10)) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "bifoldwallet", "Bi-Fold Wallet"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Bi-Fold Wallets", path: "/bifoldwallet" },
              { name: item.title, path: `/bifoldwallet/${item.id}` },
            ]),
          ]}
        />
      )}
      <WholeProductDetail products={item} />
    </>
  );
}
