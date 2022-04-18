import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/checkout' element={<RequireAuth>
         <CheckOut></CheckOut>
       </RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
