import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { RouterErrorPage } from './pages/RouterErrorPage.tsx';
import { Events } from './pages/Events.tsx';
import { Contacts } from './pages/Contacts.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Donation } from './pages/Donation.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<RouterErrorPage/>
  },
  {
    path:'/Our_Events',
    element:<Events/>
  },
  {
    path:'/Contact_Us',
    element:<Contacts/>
  },
  {
    path:'/About_Us',
    element:<AboutUs/>
  },
  {
    path:'/Donate',
    element:<Donation/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
