import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import giftProducts from "@/data/giftProducts";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Gifts";
  const description =
    "Thoughtful leather pieces — ready to gift with COD checkout.";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "All Products", path: "/products" },
            { name: title, path: "/gifts" },
          ]),
          itemListJsonLd({
            name: title,
            description,
            path: "/gifts",
            categoryPath: "gifts",
            products: giftProducts,
          }),
        ]}
      />
      <CategoryCatalog
        title={title}
        description={description}
        category="gifts"
        products={giftProducts}
      />
    </>
  );
}
