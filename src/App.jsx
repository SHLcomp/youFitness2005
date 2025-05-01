import './App.css';
import Home from './pages/home/Home.jsx';
import { createHashRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ShopAll from './pages/shopAll/ShopAll.jsx';
import ShopCats from './pages/shopCats/ShopCats.jsx';
import Filter from './components/filter/Filter.jsx';
import Error from './components/error/Error.jsx';
import Cart from './pages/cart/Cart.jsx';
import Provider from './context/Context.jsx';
// vite project yaay
const router = createHashRouter([
  {
    path: 'youFitness2005/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/youFitness2005/womens',
    element: <ShopCats category= "womens" />
  },
  {
    path: '/youFitness2005/mens',
    element: <ShopCats category= "mens" />
  },
  {
    path: '/youFitness2005/kids',
    element: <ShopCats category= "kids" />
  },
  {
    path: '/youFitness2005/shopAll',
    element: <ShopAll />
  },
  {
    path: '/youFitness2005/product/:productId',
    element: <Filter /> //will display the productDisplay, filtered by id
  },
  {
    path: '/youFitness2005/cart',
    element: <Cart />
  }
]);
function App() {
  return (
    <>
    <Provider basename={"youFitness2005/"}>
    <RouterProvider router={router} />
    </Provider>
    </>
  )
};

export default App;
