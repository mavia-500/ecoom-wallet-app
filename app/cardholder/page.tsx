import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import cardholderProducts from "@/data/carholderProducts";
import { forCategoryList } from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Card holders";
  const description = "Slim leather holders for cards and essentials.";
  const products = forCategoryList(cardholderProducts);

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
            products,
          }),
        ]}
      />
      <CategoryCatalog
        title={title}
        description={description}
        category="cardholder"
        products={products}
      />
    </>
  );
}
