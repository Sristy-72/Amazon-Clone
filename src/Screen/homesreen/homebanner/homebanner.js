import React from 'react';
 import './homebanner.css';
 import homeBannerItemProduct from '../../../homeProduct.json'
const Homebanner = () => {
  return (
    <div  className='homeBanner'>
     <img className='homeBannerimg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg" alt="" />
     <div className="graybackgroundhomebanner"></div>
     <div className="homecarditems">
       
       {
        homeBannerItemProduct.product.map((item,ind)=>{
          return (
            <div className="homebanneritemdivcard"> 
          <div className="itemcardtitle">{item.itemTitle}
        </div>
        <div className="imghomebanneritemdivcard">
          {
            item.imgs.map((it,ind)=>{
              return (
              <div className="imgBannerHomeDiv">
              <img className="imgBannerHomeDivimg" src={it} alt='bannerimg'/>
              <div className="imgBannerTagName">Cleaning
              Spin mops, wipes & more</div>
            </div>
              );
            })
          }
          

         
        </div>
        <div className="exploreall">Explore all</div>
      </div>
          );
        })
       }


     
    
     </div>
    </div>
  )
}

export default Homebanner
