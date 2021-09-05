import logo from './logo.svg';
import './App.css';
import Mainproducts from './components/products/Mainproducts';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav from './components/Header/Nav';
import Detailproductpage from './components/products/Detailproductpage';
import Main from './components/Main';
import Cartpage from './components/cart/Cartpage';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
    <Route path="/" exact component={Mainproducts}></Route>
    <Route path="/cart" exact component={Cartpage}/>
    <Route path="/:pid" exact component={Detailproductpage} ></Route>
    
    {/* <Route path="/" component={Errorpage}/> */}
    </Switch>
     </Router>
  );
}

export default App;
