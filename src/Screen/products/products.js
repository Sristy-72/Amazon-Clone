import React from "react";
import "./products.css";
import CheckIcon from "@mui/icons-material/Check";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import productDetail from "./products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/action";
import {toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    toast.success("Added in Cart", {
      position:"bottom-right" });
    dispatch(addToCart(item));
  };
  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerSubMenu"> Mobiles & Accessories </div>
        <div className="productTopBannerSubMenu"> Laptops & Accessories </div>
        <div className="productTopBannerSubMenu">TV & Home Entertainment </div>
        <div className="productTopBannerSubMenu"> Audio </div>
        <div className="productTopBannerSubMenu"> Cameras </div>
        <div className="productTopBannerSubMenu"> Computer Peripherals </div>
        <div className="productTopBannerSubMenu"> Smart Technology </div>
        <div className="productTopBannerSubMenu"> Musical Instruments </div>
        <div className="productTopBannerSubMenu"> Office & Stationery </div>
      </div>
      <div className="productMainPage">
        <div className="productPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">
            Category
            <div className="productPageMainCategoryTitleContent">
              <div className="productsPagesMainLeftCategoryTitleContent">
                Electronics
                <div className="productelement">Accessories</div>
                <div className="productelement">Cameras & Photography</div>
                <div className="productelement">Car & Vehicle Electronics</div>
                <div className="productelement">Computers & Accessories</div>
                <div className="productelement">GPS & Accessories</div>
                <div className="productelement">Home Audio</div>
                <div className="productelement">Home Theater, TV & Video</div>
                <div className="productelement">Mobiles & Accessories</div>
                <div className="productelement">Portable Media Players</div>
                <div className="productelement">Radio Communication</div>
                <div className="productelement">Tablets</div>
                <div className="productelement">Telephones & Accessories</div>
                <div className="productelement">Electronic Equipment</div>
                <div className="productelement">Warranties</div>
                <div className="productelement">
                  eBook Readers & Accessories
                </div>
                <div className="productelement">Wearable Technology</div>
                <div className="productelement">
                  General Purpose Batteries & Battery Chargers
                </div>
                <div className="productelement">
                  Headphones, Earbuds & Accessories
                </div>
                <div className="productelement">Power Accessories</div>
                <div className="productsPageMainLeftCategoryTitle">
                  Amazon Prime
                  <div className="amazonPrime">
                    <div className="checkbox">
                      <input type="checkbox" />
                      <CheckIcon
                        sx={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#febd69",
                        }}
                      />
                    </div>
                    <div className="bluePrime">Prime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productsPagemainRightTopBanner">
            1-5 of results for
            <span className="productsPageMainRightTopBannerSpan">
              {" "}
              Macbooks
            </span>
          </div>
          <div className="itemsImageProductPage">
            {productDetail.product.map((item, index) => {
              return (
                <div className="itemsImageProductPageOne" key={item.id}>
                  <div className="imgBlockitemsImagesProductPageOne">
                    <img src={item.imageUrl} className="productImageProduct" alt="productimg" /> 
                       
          
                  </div>
                  <div className="productNameProduct">
                    <div>{item.name}</div>
                    <div className="productNameProductRating">
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      />
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      />
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      />
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      />
                      <StarHalfIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      />
                    </div>
                    <div className="priceProductDetailPage">
                      <div className="currencyText">₹</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomeDetailsPrice">{item.price}</div>
                        <div
                          className="addToBasketbtn"
                          onClick={() => {
                            handleAddToCart(item);
                          }}
                        >
                          Add To Cart
                        </div>
                      </div>
                    </div>
                    <div className="offProductPage">
                      Upto 10% Off on select cards
                    </div>
                    <div className="freeDeliveryHomePage">
                      Free Delivery By Amazon
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Products;
