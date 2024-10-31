import './App.css';
import Home from './pages/home/Home.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ShopAll from './pages/shopAll/ShopAll.jsx';
import ShopCats from './pages/shopCats/ShopCats.jsx';
import Filter from './components/filter/Filter.jsx';
import Error from './components/error/Error.jsx';
import Cart from './pages/cart/Cart.jsx';
import Provider from './context/Context.jsx';
// vite project yaay
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/womens',
    element: <ShopCats category= "womens" />
  },
  {
    path: '/mens',
    element: <ShopCats category= "mens" />
  },
  {
    path: '/kids',
    element: <ShopCats category= "kids" />
  },
  {
    path: '/shopAll',
    element: <ShopAll />
  },
  {
    path: '/product/:productId',
    element: <Filter /> //will display the productDisplay, filtered by id
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);
function App() {
  return (
    <>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
    </>
  )
};

export default App;
