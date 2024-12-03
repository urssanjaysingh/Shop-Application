import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProducts } from "../recoil/productRecoil";
import ProductItem from "./ProductItem";

const Products = () => {
    const products = useRecoilValue(filteredProducts);

    return (
        <div className="columns product-columns is-tablet is-multiline">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
