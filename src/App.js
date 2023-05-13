
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Addblog from './components/Addblog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Viewblog from './components/Viewblog';
import EditBlog from './components/EditBlog';

function App() {

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/addblog' element={<Addblog></Addblog>}></Route>
          <Route path='/viewblog' element={<Viewblog></Viewblog>}></Route>
          <Route path='/editblog' element={<EditBlog></EditBlog>}></Route>
          </Routes>


        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
