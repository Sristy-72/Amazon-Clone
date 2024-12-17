import React from 'react';
import './footer.css';
import amazonLogo from '../../Assest/amazonlogo.png';
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footerContent">
        <div className="footerContent1">
           <div className="contentfooterTitle">Get to Know Us</div>
           <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">About Amazon</div>
            <div className="contentFooterSubTitleCont"> Careers</div>
            <div className="contentFooterSubTitleCont">Press releases</div>
            <div className="contentFooterSubTitleCont">Amazon Science</div>
           </div>
        </div>
        <div className="footerContent2">
           <div className="contentfooterTitle">Connect with Us</div>
           <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Instagram</div>
            <div className="contentFooterSubTitleCont"> Twitter</div>
            <div className="contentFooterSubTitleCont">Facebook</div>
           </div>
        </div>
        <div className="footerContent1">
           <div className="contentfooterTitle">Make Money with Us</div>
           <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Sell on Amazon</div>
            <div className="contentFooterSubTitleCont"> Sell under Amazon Accelerator</div>
            <div className="contentFooterSubTitleCont">Protect and Build Your Brand </div>
            <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
            <div className="contentFooterSubTitleCont">Supply to Amazon</div>
            <div className="contentFooterSubTitleCont">Become an affliate</div>
            <div className="contentFooterSubTitleCont">Fullfillment by Amazon</div>
            <div className="contentFooterSubTitleCont">Advertise Your Products</div>
            <div className="contentFooterSubTitleCont">Amazon Pay on Merchants</div>
           </div>
        </div>
        <div className="footerContent1">
           <div className="contentfooterTitle">Let Us Help You</div>
           <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Your Account</div>
            <div className="contentFooterSubTitleCont"> Returns  Centre</div>
            <div className="contentFooterSubTitleCont">Recalls and Product Safety Alerts</div>
            <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
            <div className="contentFooterSubTitleCont">Amazon App Download</div>
            <div className="contentFooterSubTitleCont">Help</div>
           </div>
        </div>
      </div>
      <div className="amazonImg">
        <img src={amazonLogo} alt="" className="amazonImgFooter" />
      </div>
    </div>
  )
}

export default Footer
