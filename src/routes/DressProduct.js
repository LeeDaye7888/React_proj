import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiShoppingCart } from "react-icons/hi";

function DressProduct() {
  const [topItems, setTopItems] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/YounChaeEun/APITest2/dress"
        );
        setTopItems(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  if (!topItems) return null;
  return (
    <div>
      <div className="textDiv"></div>
      <h4 className="title">DRESS</h4>
      <div className="topItemsWrap">
        {topItems.map((a, i) => {
          return (
            <div key={topItems[i].id}>
              <a href={`/detail/${i+33 }`}>
              <img className="topItems" src={topItems[i].src}></img></a>
              <div className="topPageSubTitle">
                <div className="Name">{topItems[i].title}</div>
                <div className="icon">
                  <HiShoppingCart />
                </div>
                <div>{topItems[i].price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DressProduct;