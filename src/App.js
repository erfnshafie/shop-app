
import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './component/Store';
import {Switch , Route , Redirect} from "react-router-dom";
import ProductDetails from './component/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './component/shared/Navbar';
import shopCart from './component/shopCart';

function App() {
  return (
   

      <ProductContextProvider>
       <CartContextProvider>
        <Navbar />
              <Switch>
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/products"  component={Store} />
              <Route path="/cart"   component={shopCart}  />
              <Redirect to="/products" />
              </Switch>
      </CartContextProvider>
      </ProductContextProvider>



  );
}

export default App;
