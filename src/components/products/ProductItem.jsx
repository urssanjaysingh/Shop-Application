import React from "react";
import { Link } from "react-router-dom";
import { productState } from "../recoil/productRecoil";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

const ProductItem = ({ product }) => {
    const [products, setProducts] = useRecoilState(productState);

    const deleteProduct = (productId) => {
        const newProducts = products.filter(
            (product) => product.id !== productId
        );
        setProducts(newProducts);
        toast.error("Item Deleted Successfully!");
    };

    return (
        <div className="column is-4-tablet is-4-desktop is-3-widescreen has-text-centered">
            <div className="box box__custom">
                <Link
                    to={`/edit-product/${product.id}`}
                    className="button button-edit is-warning"
                >
                    <i className="fa-solid fa-pen-to-square has-text-white"></i>
                </Link>
                <button
                    onClick={() => deleteProduct(product.id)}
                    href="#"
                    className="button button-delete is-danger"
                >
                    <i className="fa-solid fa-delete-left has-text-white"></i>
                </button>
                <h1 className="title is-1 picture">{product.picture}</h1>
                <h2 className="subtitle is-5 pt-3">{product.name}</h2>
                <span className="tag">₹ {product.price}/kg</span>
            </div>
        </div>
    );
};

export default ProductItem;
