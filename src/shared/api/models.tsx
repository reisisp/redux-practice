export type Product = {
  id: string;
  status: "active" | "archive";
  sum: number;
  qty: number;
  volume: number;
  name: string;
  delivery_date: string;
  currency: string;
};

export type ProductKeys = "status" | "sum" | "qty" | "volume" | "name" | "delivery_date" | "currency";

export type ProductKeysTypeNumber = "sum" | "qty" | "volume";
