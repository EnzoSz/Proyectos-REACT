import { products as initialProducts } from "./mocks/products";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config/config";
import { useFilter } from "./hooks/useFilter";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
// import { useProduct } from "./hooks/useProduct";
function App() {
  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts({ products: initialProducts });
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
