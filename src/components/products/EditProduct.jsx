import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productState } from "../recoil/productRecoil";

const EditProduct = () => {
    const [editProduct, setEditProduct] = useState({
        name: "",
        price: "",
        picture: "",
        type: "",
        id: "",
    });

    const { name, price, picture, type } = editProduct;

    const [products, setProducts] = useRecoilState(productState);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated_products = products.map((product) =>
            product.id === id ? editProduct : product
        );
        setProducts(updated_products);
        navigate("/");
    };

    useEffect(() => {
        const product = products.find((product) => product.id === id);
        setEditProduct(product);
    }, [id]);

    return (
        <div className="container">
            <div className="section">
                <div className="card">
                    <div className="card-header">
                        <p className="card-header-title is-centered">
                            Edit Product
                        </p>
                    </div>
                    <div className="card-content has-text-centered">
                        <form onSubmit={handleSubmit}>
                            <div className="columns">
                                <div className="column is-3">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Enter Product Name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="column is-3">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Enter Product Price"
                                        name="price"
                                        value={price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="column is-3">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Product Picture"
                                        name="picture"
                                        value={picture}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="column is-3">
                                    <div className="select is-fullwidth">
                                        <select
                                            name="type"
                                            value={type}
                                            onChange={handleChange}
                                        >
                                            <option>Select Product Type</option>
                                            <option value="fruit">fruit</option>
                                            <option value="vegetables">
                                                vegetables
                                            </option>
                                            <option value="beverages">
                                                beverages
                                            </option>
                                            <option value="meals">meals</option>
                                            <option value="utensils">
                                                utensils
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="column is-3"></div>
                            </div>
                            <button className="button is-primary">
                                Update Product
                            </button>
                            <Link to="/" className="button is-light ml-2">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
