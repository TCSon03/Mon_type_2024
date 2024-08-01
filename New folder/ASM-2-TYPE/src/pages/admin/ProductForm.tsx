import React, { useContext, useEffect } from "react";
import { z } from "zod";
import { ProductContext } from "../../contexts/ProductContext";
import { Product } from "../../interfaces/Product";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import instance from "../../apis";

const productSchema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string().optional(),
});

const ProductForm = () => {
  const { id } = useParams();
  // console.log(id);

  const { onSubmitProduct, getDetail } = useContext(ProductContext);
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  if (id) {
    useEffect(() => {
      (async () => {
        const data = await getDetail(id);
        console.log(data);
        reset(data);
      })();
    }, [id]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit((data) => onSubmitProduct({ ...data, id }))}>
        <h1 className="color">{id ? "Update product" : "Add product"}</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price :
          </label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label ">
            Description :
          </label>
          <input
            type="text"
            className="form-control "
            {...register("description")}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary ">
            {id ? "Update product" : "Add product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
