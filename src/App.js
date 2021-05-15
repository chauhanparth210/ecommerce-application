import { useState, useEffect } from 'react';
import { Navbar, Products, Cart, Checkout, Spinner } from './components';
import { commerce } from './lib/commerce';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(false);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          {loading ? (
            <Spinner />
          ) : (
            <Products products={products} onAddToCart={handleAddToCart} />
          )}
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout cart={cart} onEmptyCart={handleEmptyCart} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
