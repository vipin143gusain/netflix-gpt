/** @format */

import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
   const appRouter = createBrowserRouter([
      {
         path: '/',
         element: <Login />,
         errorElement: <div>404</div>,
      },

      {
         path: '/browse',
         element: <Browse />,
      },
   ]);
   return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
   );
};

export default Body;
