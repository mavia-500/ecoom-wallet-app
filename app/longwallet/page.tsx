import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import longwalletProducts from "@/data/longwalletProducts";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Long wallets";
  const description =
    "Spacious leather wallets for cash, cards, and documents.";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "All Products", path: "/products" },
            { name: title, path: "/longwallet" },
          ]),
          itemListJsonLd({
            name: title,
            description,
            path: "/longwallet",
            categoryPath: "longwallet",
            products: longwalletProducts,
          }),
        ]}
      />
      <CategoryCatalog
        title={title}
        description={description}
        category="longwallet"
        products={longwalletProducts}
      />
    </>
  );
}
