export type MenuType = {
  id: string;
  title: string;  
  slug: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export interface ProductType {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
}
