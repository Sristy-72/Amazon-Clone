import React, { useState, useEffect } from 'react'
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action/action';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a=0;
  
  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart =(id)=>{
    toast.error("Item Removed From Cart" ,{
      position :"bottom-right"
    })
    dispatch (removeFromCart(id));
  }
  return (
    <div className="cart">
      <div className="topleftcart">
        <div className="topleftcarttitle">Shopping Cart</div>
        <div className="deselectallcart">Deselect all items</div>
        <div className="cartpricetextdivider">Price</div>

        <div className="cartitemsdiv">
          {cartItems.map((item, ind) => {
            return (
              <div className="cartitemsblock">
                <div className="cartitemsleftblock">
                  <div className="cartitemsleftblockimage">
                    <img
                      className="cartitemsleftblocking"
                      src={item.imageUrl} alt='leftblocking'
                    />
                  </div>
                  <div className="cartitemleftblockdetails">
                    <div className="cartitemproductname">
                     {item.name}
                    </div>
                    <div className="instockcart">In Stock</div>
                    <div className="eligible">Eligible for Free Shopping</div>
                    <div className="amazonfullfilledimage">
                      <img
                        className="fulfilling"
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                        alt=""
                      />
                    </div>
                    <div className="removefromcart" onClick ={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                  </div>
                </div>
                <div className="cartitemrightblock">Rs {item.price}</div>
              </div>
            );
          })}

         
        </div>
      </div>
      <div className="toprightcart">
        <div className="subtotaltitle">
          subtotal ({cartItem.length} items) :
          <span className="subtotaltitlespan">Rs {a}</span>{" "}
        </div>
        <div className="giftaddto">
          <input type="checkbox" />
          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedtobuy">Proceed To Buy</div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cart;
