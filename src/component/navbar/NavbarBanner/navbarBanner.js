// import React from 'react';
// import './navbarBanner.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import { Link } from 'react-router-dom';
// const NavbarBanner =() =>{
//   // const options =[
//   //   {"name" : "fresh"},
//   //   { "name" :"Amazon mini"},c.
//   //   { "name" : "Sell"},
//   //   { "name" : "best sellers"},
//   //   { "name" : "Today's Deals"},
//   //    { "name": "Mobiles"} ,
//   //   { "name" :"Prime"},
//   //   {"name" : "Customer Services"}
//   // ]
//   return (
//     <div className="navbarBanner" >
//       <div className="navbarBannerOptionsLeft">
//       <div className="optionsNavbarBanner">
//         <MenuIcon sx={{fontSize:"24px"}}/>
//         <div className="allOptionsNavbarBanner">All</div>
//       </div>
//       <div className="optionsNavbarBanner">
//         <div className="allOptionsNavbarBanner">Fresh</div>
//       </div>
//       </div>
//       <div className="navbarBannerRightSide">

//       </div>

//     </div>
//   )
// }

// export default NavbarBanner

import React from "react";
import "./navbarBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const NavbarBanner = () => {
  const options = [
    { name: "MX Player" },
   
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronis" },
    { name: "Customer Services" },
    { name: "Home & Kitchen" },
    { name: "Prime" },
    { name: " Amazon Pay" },
    { name: "New Releases" },
    { name: "Fashion" },
    { name: "Car & Motorbike" },
    { name: "Computers" },
    
  
  ];
  return (
    <div className="navbarBanner">
      
        <div className="optionsNavbarBanner">
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>

        {options.map((item, ind) => {
          return (
            <Link to='/products' className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </Link>
          );
        })}
      

     
    </div>
  );
};

export default NavbarBanner;
