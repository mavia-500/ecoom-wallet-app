import ProductsCatalog from "@/components/ProductsCatalog";
import JsonLd from "@/components/JsonLd";
import { getCatalogProducts } from "@/lib/catalog";
import { breadcrumbJsonLd, catalogItemListJsonLd } from "@/lib/seo";

export default function ProductsPage() {
  const products = getCatalogProducts();
  const lcpImage = products[0]?.image[0];
  const title = "All products";
  const description =
    "Every Hilyah leather wallet in one place — cash on delivery across Pakistan.";

  return (
    <>
      {lcpImage ? (
        <link
          rel="preload"
          as="image"
          href={lcpImage}
          fetchPriority="high"
        />
      ) : null}
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: title, path: "/products" },
          ]),
          catalogItemListJsonLd({
            name: title,
            description,
            path: "/products",
            products,
          }),
        ]}
      />
      <ProductsCatalog products={products} />
    </>
  );
}
