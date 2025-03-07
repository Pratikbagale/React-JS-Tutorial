 // import Header from './components/header/Header'; 
import Counter from './components/counter/Counter';
import ImageComp from './components/imagetask/ImageComp';
import Products from './components/products/Products';
import Home  from './components/home/Home';
import Nav from './components/nav/Nav';
import Electronics from './components/products/categories/electronics/Electronics';
import Jewelery from './components/products/categories/jewelery/Jewelery';
import PageNotFound from './components/pagenotfound/PageNotFound';

import { Route, Routes } from 'react-router-dom';
import './App.css'
import AllProducts from './components/allproducts/AllProducts';


function App() {
 
  return (
     <div>
      <Nav />
     <Routes>
      <Route  path={"/"} element= {<Home />}/>
     
       <Route  path={"/products"} element= {<Products />}>
      <Route  path={"electronics"} element={<Electronics />}/>
      <Route  path={"jewelery"} element={<Jewelery />}/>
      </Route>

      <Route  path={"/counter"} element={<Counter/>}/>

      <Route  path={"/imageComponent"} element={<ImageComp />}/>

      <Route path={"/allproducts"} element={<AllProducts />}/>

      {/* <Route path={"*"} element={<PageNotFound />} /> */}

      </Routes>

     {/* <Header /> */}
     {/* <Main /> */}
     {/* <Footer /> */}

      </div>
     
  );
}

export default App;
