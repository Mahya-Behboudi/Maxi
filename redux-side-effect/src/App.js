import Cart from "./components/Cart/Cart";
import Layout from "./components/Leyout/Layout";
import Products from "./components/Shops/Products";
import { useSelector } from "react-redux";
function App() {
  const showCart = useSelector(state =>state.ui.cardIsVisible)
  return (
    <Layout>
   {!showCart &&    <Cart/>}
      <Products/>
    </Layout>
  );
}

export default App;
