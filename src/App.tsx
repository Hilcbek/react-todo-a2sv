import OutletComponent from './components/shared/outlet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import SingleTodo from './pages/single-todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OutletComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'todo/:id',
        element: <SingleTodo />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
