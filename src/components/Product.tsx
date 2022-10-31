import React, { useState } from "react";
import { ProductModel } from "../models/product.model";

interface ProductProps {
  product: ProductModel;
}

export const Product = ({ product }: ProductProps) => {
  const [show, setShow] = useState(false);

  const btnBgClassName = show ? "bg-emerald-400" : "bg-yellow-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt="Product overview" className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}$</span>
      <button className={btnClasses.join(" ")} onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>
      {show ? <p>{product.description}</p> : null}
    </div>
  );
};
