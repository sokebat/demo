export type Collection = {
  id: string;
  name: string;
  slug: string;
};

export type FeaturedAsset = {
  preview: string;
  mimeType: string;
  width: number;
  height: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  featuredAsset: FeaturedAsset;
  collections: Collection[];
};


