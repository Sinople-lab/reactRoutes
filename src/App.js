import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; 
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement: <NotFound />
  },
  {
    path:'/profiles',
    element:<Profiles />,
    children:[
      {
        path:'/profiles/:profileId',
        element:<Profile />
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
