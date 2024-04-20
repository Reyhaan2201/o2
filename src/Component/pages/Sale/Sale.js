import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Sale() {
  const { Productcategory } = useParams();
  const [product, setProduct] = useState([]);
 const [text, settext] = useState("Favourites");
 


  useEffect(() => {
    axios.get(`http://localhost:1804/Outfitoracle/${Productcategory}/Sale`)
      .then((res) => {
        console.log("Successfully got the sale product category", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Error getting the product category of sale", err.message);
      });
  }, [Productcategory]);

  // Function to handle adding item to favorites
  const handleAddToFavorites = (item) => {
    // Navigate to the favorite page and pass the product data as state
    settext("Added to favorites")
    document.getElementById("fav").style.backgroundColor ="#DFB2A9"
    console.log("added to favorites")
  
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {product.map((e) => (
            <div className="col d-flex justify-content-center" id="cart" key={e._id}>
              <div className="card m-4" style={{ width: "15rem" }}>
                <img src={e.Productimg} className="card-img-top" alt="Product" style={{ height: "300px" }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "13px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                    {e.Productname}
                  </h5>
                  <p className="card-text" style={{ fontSize: "15px" }}>
                    Rs.{e.Productprice}
                  </p>
                  <div className="btn-group gap-2" role="group" aria-label="Basic example" style={{ border: "none", borderRadius: "0px" }}>
                    <button type="button" className="btn btn-primary btn-sm mr-2" id="addtocart">
                      Add to Cart
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-sm" id="fav" onClick={() => handleAddToFavorites(e)}>
                      {text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sale;
