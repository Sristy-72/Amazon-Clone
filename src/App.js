import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Homescreen from './Screen/homesreen/homescreen';
import { Routes , Route } from 'react-router-dom'
import Products from './Screen/products/products';
import Footer from './component/Footer/footer';
import Cart from './Screen/cart/cart';





function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes >
      <Route  path ='/' element={ <Homescreen/>} />
      <Route path= '/products' element={ <Products/> } />
      <Route path='/cart' element={<Cart />} />

     </Routes>
     <Footer/>
      
     
    </div>
  );
}


export default App;
