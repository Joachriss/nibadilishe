import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { RouterErrorPage } from './pages/RouterErrorPage.tsx';
import { Events } from './pages/Events.tsx';
import { Contacts } from './pages/Contacts.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Donation } from './pages/Donation.tsx';
import { Gallery } from './pages/Gallery.tsx';
import { Layout } from './components/Layout.tsx';
import { Register } from './staff/Register.tsx';
import { Login } from './staff/Login.tsx';
import { StaffLayout } from './components/StaffLayout.tsx';
import { Dashboard } from './staff/Dashboard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<RouterErrorPage/>,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/Our_Events',
        element: <Events />
      },
      {
        path: '/Contact_Us',
        element: <Contacts />
      },
      {
        path: '/About_Us',
        element: <AboutUs />
      },
      {
        path: '/Donate',
        element: <Donation />
      },
      {
        path: '/Gallery',
        element: <Gallery />
      },
      
    ]
  },
  {
    path: "/staff",
    element:<StaffLayout />,
    children:[
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path: '/staff/register',
        element: <Register />
      },
      {
        path: '/staff/login',
        element: <Login />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
