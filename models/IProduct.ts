export interface IProductDetail {
  brandName: string;
  displayName: string;
  heroImage: string;
  productId: string;
  rating: string;
  reviews: string;
  targetUrl: string;
  image450: string;
}

export interface IProduct {
  categoryId: string;
  displayName: string;
  products: IProductDetail[];
}
