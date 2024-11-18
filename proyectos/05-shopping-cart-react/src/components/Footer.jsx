import "../css/Footer.css";
import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
export const Footer = () => {
  const { filters } = useFilter();
  const { cart } = useCart();
  return (
    <footer className="footer">
      {/* {
            JSON.stringify(filters, null, 2)
        } */}
      {/* {
            JSON.stringify(cart, null, 2)
        } */}
      <h4>
        Prueba Tecnica
        <span>@EnzoSz</span>
      </h4>
      <h5>Todos los derechos reservados</h5>
    </footer>
  );
};
