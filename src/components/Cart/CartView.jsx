import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";

export const CartView = () => {
    const {cart} = useCart();

    return(
        <section ClassName = "cart-container">
            <h1>Tu carrito de compras</h1>
        {cart.length ? (
            <>
            <CartList/>
            <CartSummary/>
            </>
        ):(
         <>
         <p className="empty-cart">El carrito esta vacío 😕</p>
          <Link className="btn primary bg-primary b " to={"/"}>
            Volver
          </Link>
         </>   
        )}
        </section>
    );
};