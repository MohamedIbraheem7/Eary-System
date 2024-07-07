import React from 'react';
import './style/App.css';
/*import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";
import { Home } from "./pages/Home";*/
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { CheckUserExist } from './helper/helper';

/** import components */

import Main from './pages/Main';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  { /**minf3 y3ml Route gher lma ydkhl userID */
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])


function App  ()  { 
  return ( 
    <>
     
    
     <RouterProvider router={router}/>
     
        
    </>
  );

};

export default App;
