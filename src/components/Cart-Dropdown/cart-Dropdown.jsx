import "./cart-Dropdown.style.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../Contexts/CartContext";
import Button from "../Button-Component/ButtonComponent";
import CartItem from "../Cart-Item/Cart-Item";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
