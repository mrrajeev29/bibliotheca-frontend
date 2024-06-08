import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import MainPage from './component/MainPage/MainPage';
import Detail from './component/Details/Detail';
import Navbar from './component/Navbar/Navbar';
import Loader from './component/Loader/Loader';
import Profile from './component/Profile/Profile';
import Editinfo from './component/EditInfo/EditInfo';
import Seller from './component/Seller/Seller';
import Confirm from './component/Confirm/Confirm';
import Basket from './component/Basket/Basket';
import Address from './component/AddNewAddress/Address';
import Delivery from './component/Delivery/Delivery';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import History from './component/History/History';
import Faq from './component/FAQ/Faq';
const router= createBrowserRouter([
  
  {
    path:"/",
    element:<Login/>,
  },
  {
    path:"signup",
    element:<Signup/>
  },
  {
    path:"mainpage",
    element: <MainPage/>
  },
  {
    path:"details",
    element:<Detail/>
  },
  {
    path:"profile",
    element:<Profile/>
  },
  {
    path:"editinfo",
    element:<Editinfo/>
  },
  {
    path:"loading",
    element:<Loader/>
  },
  {
    path:"confirmed",
    element:<Confirm/>
  },
  {
    path:"sell",
    element:<Seller/>
  },
  {
    path:"yourbasket",
    element:<Basket/>
  },
  {
    path:"order",
    element:<Delivery/>
  },
  {
    path:"addnewaddress",
    element:<Address/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"orderhistory",
    element:<History/>
  },
  {
    path:"faq",
    element:<Faq/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>

);
reportWebVitals();
