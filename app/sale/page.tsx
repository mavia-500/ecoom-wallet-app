import SaleCatalog from "@/components/SaleCatalog";
import JsonLd from "@/components/JsonLd";
import { getSaleProducts } from "@/lib/catalog";
import { breadcrumbJsonLd, catalogItemListJsonLd } from "@/lib/seo";

export default function SalePage() {
  const products = getSaleProducts();
  const lcpImage = products[0]?.image[0];
  const title = "Sale";
  const description =
    "Every Hilyah leather piece currently on discount — cash on delivery across Pakistan.";

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
            { name: "All Products", path: "/products" },
            { name: title, path: "/sale" },
          ]),
          catalogItemListJsonLd({
            name: title,
            description,
            path: "/sale",
            products,
          }),
        ]}
      />
      <SaleCatalog products={products} />
    </>
  );
}
