import CartHeader from "../components/CartHeader";
import ProductsList from "../components/ProductsList";

let itemNum = 0;

function App() {
  return (
    <div className="container">
      <CartHeader />
      <ProductsList />
    </div>
  );
}

export default App;
