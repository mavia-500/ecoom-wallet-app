import CategoryCatalog from "@/components/CategoryCatalog";
import JsonLd from "@/components/JsonLd";
import bifoldProducts from "@/data/bifoldProduct";
import { forCategoryList } from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Page() {
  const title = "Bi-fold wallets";
  const description =
    "Compact everyday leather wallets cash on delivery across Pakistan.";
  const products = forCategoryList(bifoldProducts);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "All Products", path: "/products" },
            { name: title, path: "/bifoldwallet" },
          ]),
          itemListJsonLd({
            name: title,
            description,
            path: "/bifoldwallet",
            categoryPath: "bifoldwallet",
            products,
          }),
        ]}
      />
      <CategoryCatalog
        title={title}
        description={description}
        category="bifoldwallet"
        products={products}
      />
    </>
  );
}
