import { Product } from "./Product";

export interface Cart {
  id?: number | string;
  quantity: number;
  title: string;
  price: number;
  description: string;
  thumbnail?: string;
}

export type CartItem = {
  product: Product;
  quantity: number;
};
