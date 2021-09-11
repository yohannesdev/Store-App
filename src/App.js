import logo from './logo.svg';
import './App.css';
import Mainproducts from './components/products/Mainproducts';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav from './components/Header/Nav';
import Detailproductpage from './components/products/Detailproductpage';
import Main from './components/Main';
import Cartpage from './components/cart/Cartpage';
import Checkoutpage from './components/checkout/Checkoutpage';
import Home from './components/home/Home';
import Explore from './components/products/Explore';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/products" exact component={Mainproducts}/>
    <Route path="/explore" exact component={Explore}/>
    <Route path="/products/:pid" exact component={Detailproductpage} />
    <Route path="/cart" exact component={Cartpage}/>
    
    <Route path="/Checkoutpage" exact component={Checkoutpage}/>
    
    
    </Switch>
     </Router>
  );
}

export default App;
