import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    searchTextState,
    productFilteredState,
    filteredCount,
} from "../recoil/productRecoil";

const Sidebar = () => {
    const [searchText, setSearchText] = useRecoilState(searchTextState);
    const [filter, setFilter] = useRecoilState(productFilteredState);
    const totalItems = useRecoilValue(filteredCount);

    return (
        <div className="columns is-multiline">
            <div className="column is-12">
                <h2 className="subtitle">({totalItems}) products</h2>

                <h3 className="subtitle is-6 mb-2">Search Products</h3>
                <input
                    className="input"
                    type="text"
                    placeholder="Search your product..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="column is-12">
                <h3 className="subtitle is-6 mb-2">Filter</h3>
                <div className="select is-fullwidth">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">show all</option>
                        <option value="fruit">fruit</option>
                        <option value="vegetables">vegatables</option>
                        <option value="meals">meals</option>
                        <option value="beverages">beverages</option>
                        <option value="utensils">utensils</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
