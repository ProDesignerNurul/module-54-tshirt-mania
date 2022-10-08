import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Grandpa from './components/Grandpa/Grandpa';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', 
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: '/home', 
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: '/orders', element: <Orders></Orders>
        },
        {
          path: '/grandpa', element: <Grandpa></Grandpa>
        },
        {
          path: '/about', element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
