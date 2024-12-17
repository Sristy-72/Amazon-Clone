import React from "react";
import "./navbarBelt.css";
import amazonlogo from "../../../Assest/amazonlogo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import indianflag from "../../../Assest/indianflag.png";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const NavbarBelt = () => {
  
    const cartItems = useSelector((state) => state.cart.items);
  
  return (
    <div className="navbarBelt">
      <div className="leftnavbelt">
        <Link to='/' className="leftnavbeltlogo">
          <img className="amazonlogonavbar" src={amazonlogo} alt="amazonLogo" />
          <span className="navbarlogotext">.in </span>
        </Link>
        <div className="navbarbeltlocation">
          <div className="locationicon">
            <LocationOnOutlinedIcon
              className="navbarBeltLoactionImgIcon"
              sx={{ fontSize: "22px" }}
            />
          </div>
          <div className="navbarbeltlocationplace">
            <div className="delivering">Delivering to Patna</div>

            <div className="updateloaction">Update location</div>
          </div>
        </div>
      </div>
      <div className="navbarsearchbox">
        <div className="navbarsearchboxdiv">
          <div className="navbarall">
            <div className="navbarsearchboxalltext">All</div>
            <ArrowDropDownOutlinedIcon
              className="navbarsearchboxdropdwonicon"
              sx={{ fontSize: "20px" }}
            />
          </div>
          <input
            type="text"
            className="searchbox"
            placeholder="Search Amazon.in"
          />
          <div className="searchiconnavbarbelt">
            <SearchIcon
              sx={{ fontSize: "26px" }}
              className="searchIconnavbarBeltIcon"
            />
          </div>
        </div>
      </div>
      <div className="rightnavbar">
        <div className="flaglogo">
          <img src={indianflag} className="indianflaglogo" />
          <div className="flagtext">
            EN
            <ArrowDropDownOutlinedIcon
              sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
              className="indiaCodenavbarbeltdrp"
            />{" "}
          </div>
        </div>
        <div className="hellosigninnavbarbelt">
          <div className="hellotopnavbarbelt">Hello, User</div>
          <div className="flagtext">Accounts & Lists</div>
        </div>
        <div className="hellosigninnavbarbelt">
          <div className="hellotopnavbarbelt">Returns</div>
          <div className="flagtext">&Orders</div>
        </div>
        <Link to= {'/cart'} className="hellosigninnavbarbelt">
          <span className="cartnumber">{cartItems.length}</span>
          <div className="hellotopnavbarbelt">
            <ShoppingCartIcon /> <span className="carttitle">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarBelt;
