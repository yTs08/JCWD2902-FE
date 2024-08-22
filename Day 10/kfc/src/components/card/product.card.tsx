import React, { useEffect } from "react";
import { api } from "@/config/axios.config";
import { useState } from "react";
import { products } from "../../../json/data.json";

type Props = {};

{
  products.map((products) => (
    <div>
      <img src={products.img_src} width={"100%"} height={"100%"} />
      <h1 className="text-center mt-5 text-lg text-wrap text-l font-semibold">
        {products.name}
      </h1>
      <p className="py-5 mt-4 px-6 text-lg font-thin">{products.description}</p>
    </div>
  ));
}

// export default function Products({}: Props) {
//   const [product, setProduct] = useState<IProduct[]>([]);

//   useEffect(() => {
//     const fetch = async () => {
//       const res = await api.get("/products");
//       setProduct(res.data);
//     };
//     fetch();
//   }, []);
// }

//   return (
//     <>

//  <div className="">
//     {product.map((product, key) => ( <p>{product.name}</p>
//     </>
//     ))}
//     </>
//   );

interface IProduct {
  id: number;
  name: string;
  price: number;
  categoryID: string;
  description: string;
  image: string;
}
