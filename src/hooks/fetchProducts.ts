import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { ProductModel } from "../models/product.model";

export function useFetchProducts() {
  const [products, setProducts] = useState<ProductModel[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const addNewProduct = (newProduct: ProductModel) =>
    setProducts((prev) => {
      if (Array.isArray(prev)) {
        return [...prev, newProduct];
      }
      return null;
    });

  useEffect(() => {
    (async function getProducts() {
      try {
        setError("");
        setIsLoading(true);
        const { data } = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProducts(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        const error = e as AxiosError;
        setError(error.message);
      }
    })();
  }, []);

  return { products, isLoading, error, addNewProduct };
}
