import { useState } from "react";
import axios from "axios";
import { NewProduct } from "../models/newProduct.model";
import { ProductModel } from "../models/product.model";

/* 
category
: 
"wear"
description
: 
"Best T-shirt"
id
: 
21
image
: 
"https://i.pravatar.cc/"
price
: 
29.99
title
: 
"T-shirt \"Mama Miya\""
*/

interface CreateProductProps {
  setShowModal: (flag: boolean) => void;
  addNewProduct: (value: ProductModel) => void;
}

export function CreateProduct({
  setShowModal,
  addNewProduct,
}: CreateProductProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "price":
        setPrice(value);
        break;

      case "description":
        setDescription(value);
        break;

      case "image":
        setImage(value);
        break;

      case "category":
        setCategory(value);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: NewProduct = {
      title,
      price: Number(price),
      description,
      image,
      category,
    };

    const response = await axios.post(
      "https://fakestoreapi.com/products",
      newProduct
    );
    addNewProduct(response.data);
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        name="price"
        value={price}
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product price"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        name="description"
        value={description}
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product description"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        name="image"
        value={image}
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product image url"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        name="category"
        value={category}
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product category"
        onChange={handleChangeInput}
      />
      <button
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
