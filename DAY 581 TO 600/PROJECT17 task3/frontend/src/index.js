import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home'
import EditStudent from './pages/EditStudent';
import AddStudent from './pages/AddStudent';
import DeleteStudent from './pages/DeleteStudent';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/add',
    element:<AddStudent/>
  },
  {
    path:"/edit/:rollno",
    element:<EditStudent/>
  },
  {
    path:"/delete/:rollno",
    element:<DeleteStudent/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
