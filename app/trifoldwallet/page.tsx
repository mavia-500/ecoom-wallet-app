import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import trifoldProducts from "@/data/trifoldProducts";
import { forCategoryList } from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Tri-fold wallets";
  const description =
    "Extra capacity without compromising on leather quality.";
  const products = forCategoryList(trifoldProducts);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "All Products", path: "/products" },
            { name: title, path: "/trifoldwallet" },
          ]),
          itemListJsonLd({
            name: title,
            description,
            path: "/trifoldwallet",
            categoryPath: "trifoldwallet",
            products,
          }),
        ]}
      />
      <CategoryCatalog
        title={title}
        description={description}
        category="trifoldwallet"
        products={products}
      />
    </>
  );
}
