import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import toast from "react-hot-toast";
import { productState } from "../recoil/productRecoil";

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({
        name: "",
        price: "",
        picture: "",
        type: "",
        id: uuidv4(),
    });

    const { name, price, picture, type } = addProduct;

    const setProducts = useSetRecoilState(productState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts((oldProducts) => [addProduct, ...oldProducts]);
        setAddProduct({
            name: "",
            price: "",
            picture: "",
            type: "",
            id: uuidv4(),
        });
        toast.success("Item Added Successfully!");
        navigate("/");
    };

    return (
        <div className="container">
            <div className="section">
                <div className="card">
                    <div className="card-header">
                        <p className="card-header-title is-centered">
                            Add Product
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
                                Add Product
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

export default AddProduct;
