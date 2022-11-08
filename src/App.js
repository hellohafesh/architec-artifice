import { Children } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Route';

function App() {
  return (
    <div data-theme="winter" className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}>
        {Children}
      </RouterProvider>
    </div>
  );
}

export default App;
