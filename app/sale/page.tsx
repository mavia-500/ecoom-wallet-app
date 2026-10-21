import SaleCatalog from "@/components/SaleCatalog";
import JsonLd from "@/components/JsonLd";
import { getSaleProducts } from "@/lib/catalog";
import { breadcrumbJsonLd, catalogItemListJsonLd } from "@/lib/seo";

export default function SalePage() {
  const products = getSaleProducts();
  const title = "Sale";
  const description =
    "Every Hilyah leather piece currently on discount cash on delivery across Pakistan.";

  return (
    <>
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
