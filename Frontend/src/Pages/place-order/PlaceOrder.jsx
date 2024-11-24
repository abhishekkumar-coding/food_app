import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
function PlaceOrder() {
  const { getTotalCartAmout } = useContext(StoreContext);

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email adress" />
        <input type="text" placeholder="Streat" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="ZIP Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total </h2>
          <div className="">
          <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmout()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmout() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmout() === 0 ? 0 :getTotalCartAmout()+2}</p>
            </div>
            <button onClick={() => navigate("/order")} className="checkout">
              PROCEED TO CHECKPUT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
