import "./App.css";
import React, { useEffect } from "react";
import Mainproducts from "./components/products/Mainproducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Header/Nav";
import Detailproductpage from "./components/products/Detailproductpage";
import Cartpage from "./components/cart/Cartpage";
import Checkoutpage from "./components/checkout/Checkoutpage";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Mainproducts} />
        <Route path="/products/:pid" exact component={Detailproductpage} />
        {/* <Route path="/cart" exact component={Cartpage} /> */}
        {/* <Route path="/Checkoutpage" exact component={Checkoutpage} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
