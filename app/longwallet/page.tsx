import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import LcpPreload from "@/components/LcpPreload";
import longwalletProducts from "@/data/longwalletProducts";
import { forCategoryList } from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Traveller wallets";
  const description =
    "Spacious traveller wallets for cash, cards, and documents.";
  const products = forCategoryList(longwalletProducts);

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
            products,
          }),
        ]}
      />
      <LcpPreload href={products[0]?.image[0]} />
      <CategoryCatalog
        title={title}
        description={description}
        category="longwallet"
        products={products}
      />
    </>
  );
}
