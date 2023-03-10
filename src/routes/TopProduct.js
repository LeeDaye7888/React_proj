import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiShoppingCart } from "react-icons/hi";

function TopProduct() {
  const [topItems, setTopItems] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/YounChaeEun/APITest2/posts"
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
      {/* <div className="imgDiv">
        <img src="https://images.hermanmiller.group/m/3ba6daf53dfbdb2c/W-HAY_2546588_100338201_terracotta_v3_001.png?auto=format&mediaId=045F4E73-1AE7-4E41-AC6C5958D81E7497&rect=0%2C.1559%2C.9999%2C.8437&auto=format&w=2000&h=1000&q=45"></img>
      </div> */}
      <div className="textDiv">
        {/* <div className="sofaText">
                    <p>SOFA 
                        SECTIONAL
                    </p>
                    
                </div>
                <div className="sofaSmallText">
                    <p>Designed for lasting comfort, HAY’s sofas and modular sectional sofas come in a wide range of fabrics and leathers.</p>
                </div> */}
      </div>
      <h4 className="title">TOP</h4>
      <div className="topItemsWrap">
        {topItems.map((a, i) => {
          return (
            <div key={topItems[i].id}>
              <a href={`/detail/${i}`}>
              
              <img className="topItems" src={topItems[i].src}
              ></img>
              </a>
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


export default TopProduct;