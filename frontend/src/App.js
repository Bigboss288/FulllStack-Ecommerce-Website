
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Routes,Route} from "react-router-dom";
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Productlist from './Pages/Productlist';
import Product from './Pages/Product';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.user)
  console.log(user)
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={user ? <Home/> : <Login/>}/>
        <Route path='/Login' element={user ? <Home/> : <Login/>}/>
        <Route path='/Register' element={ <Register/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Productlist/:category' element={<Productlist/>}/>
        <Route path='/Product/:id' element={<Product/>}/>
      </Routes>

    </div>
  );
}

export default App;
