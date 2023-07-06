
import './App.css';
import login from './Login';
import products from'./Products';
import navBar from './NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <navBar/>
      <BrowserRouter>
      <Routes>
       <Route path='/products' element={<Products/>}/>
       {/* <Route path='/productDetails'element={<ProductDetails/>}/> */}
       <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;