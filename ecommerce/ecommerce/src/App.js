/*import logo from './logo.svg';*/
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/nabvar';
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Contact} from "./pages/contact/contact";
import { ShopContextProv } from './context/shop-context';

function App() {
  return (
    <div className="App">
     
      <ShopContextProv>
      <Router>
        <Navbar />
        <Routes> 
          
        <Route path="/" element = {<Shop />}/>
        <Route path= "/contact" element = {<Contact />} />
        <Route path="/cart" element = {<Cart />}/>

        </Routes>
      </Router>
      </ShopContextProv>
    </div>
  );
}

export default App;
