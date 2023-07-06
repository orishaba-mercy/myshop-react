import './App.css';
import Products from'./Products';
import Login from './Login';
import NavBar from './NavBar';
import Productsdetails from './Productsdetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar/>
     
      <BrowserRouter>
      <Routes>
       <Route path='/Products' element={<Products/>}/>
       <Route path='/Productdetails/:id'element={<productdetails/>}/>
       <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;