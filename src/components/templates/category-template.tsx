import { fetchData } from "@/lib/fetch-data";
import { CategoryCard, SectionHeading } from "@/components/index";

import { Product } from "@/types/product-types";

export const CategoryTemplate = async () => {
  const productQuery = `
    query GetProductList {
      products(
        options: {
          take: 30
          filter: { name: { contains: "MEN" } }
          sort: { name: ASC }
        }
      ) {
        totalItems
        items {
          id
          name
          slug
          featuredAsset {
            preview
            mimeType
            width
            height
          }
          collections {
            id
            name
            slug
          }
        }
      }
    }
  `;

  let products = [];

  try {
    const data = await fetchData(productQuery);

    products = data?.products?.items || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    products = [];
  }

  return (
    <div className="mt-12">
      <SectionHeading heading="Shop by Category" />

      <div className="grid grid-cols-2 gap-6 mt-4 lg:mt-5 lg:gap-4 lg:grid-cols-4">
        {products.map((item: Product) => {
          if (!item.collections[0]?.name) return null;
          return (
            <CategoryCard
              key={item.id}
              cat={item.collections[0]?.name}
              description={item.slug}
              imageUrl={item.featuredAsset?.preview}
            />
          );
        })}
      </div>
    </div>
  );
};
