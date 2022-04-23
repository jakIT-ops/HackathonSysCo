import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import { useCart } from "react-use-cart";
import Products from "../../pages/Products/Products";
import axios from "axios";

import "./style.css";
const Search = () => {
  
  const [serachKey, setSerachKey] = useState("");
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    setItemsData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changing = () => {
    
  }
  <Products itemsData={itemsData} loading={loading} serachKey={serachKey.toLowerCase()}/>
  return (
    <>
     <div className="searhBBar">
            <input
              type="text"
              placeholder="Хайх бараагаа бичнэ үү.."
              onChange={(event) => {
                setSerachKey(event.target.value);
              }}
            />
            <div className="searchIcon">
              <MagnifyingGlass className="searchIconIcon" size={18} />
            </div>
      </div>
    </>
  )
}

export default Search
