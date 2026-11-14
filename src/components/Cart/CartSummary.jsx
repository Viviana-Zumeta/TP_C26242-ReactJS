import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <>
      <p className="cart-actions">TOTAL A PAGAR:👉 ${total} </p>
      <button className="btn cart-actions" onClick={checkout}>
        FINALIZAR COMPRA
      </button>
    </>
  );
};