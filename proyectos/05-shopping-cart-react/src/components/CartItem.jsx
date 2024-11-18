export function CartItem({ thumbnail, title, price, quantity, addToCart }) {
    return (
      <li>
        <img src={thumbnail} alt="Samsung" />
        <div>
          <strong>{title}</strong>- ${price}
        </div>
        <footer>
          <small >Cantidad: {quantity}</small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    );
  }