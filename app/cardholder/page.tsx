import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import cardholderProducts from "@/data/carholderProducts";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Card holders";
  const description = "Slim leather holders for cards and essentials.";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "All Products", path: "/products" },
            { name: title, path: "/cardholder" },
          ]),
          itemListJsonLd({
            name: title,
            description,
            path: "/cardholder",
            categoryPath: "cardholder",
            products: cardholderProducts,
          }),
        ]}
      />
      <CategoryCatalog
        title={title}
        description={description}
        category="cardholder"
        products={cardholderProducts}
      />
    </>
  );
}
