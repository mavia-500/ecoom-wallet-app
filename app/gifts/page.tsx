import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import LcpPreload from "@/components/LcpPreload";
import giftProducts from "@/data/giftProducts";
import { forCategoryList } from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Gifts";
  const description =
    "Thoughtful leather pieces ready to gift with COD checkout.";
  const products = forCategoryList(giftProducts);

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
            products,
          }),
        ]}
      />
      <LcpPreload href={products[0]?.image[0]} />
      <CategoryCatalog
        title={title}
        description={description}
        category="gifts"
        products={products}
      />
    </>
  );
}
