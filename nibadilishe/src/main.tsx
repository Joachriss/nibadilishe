import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { RouterErrorPage } from './pages/RouterErrorPage.tsx';
import { Events } from './pages/Events.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<RouterErrorPage/>
  },
  {
    path:'/events',
    element:<Events/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
