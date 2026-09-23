import type { Metadata } from "next";
import bifoldProducts from "@/data/bifoldProduct";
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
  const item = findProductByParam(bifoldProducts, product);
  return productMetadata(item, "bifoldwallet", "Bi-Fold Wallet");
}

export default async function BifoldProductPage({ params }: Props) {
  const { product } = await params;
  const item = findProductByParam(bifoldProducts, product) || null;

  return (
    <>
      {item && (
        <JsonLd
          data={[
            productJsonLd(item, "bifoldwallet", "Bi-Fold Wallet"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Bi-Fold Wallets", path: "/bifoldwallet" },
              { name: item.title, path: productHref("bifoldwallet", item) },
            ]),
          ]}
        />
      )}
      <WholeProductDetail products={item} />
    </>
  );
}
