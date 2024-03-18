
import { RouterProvider } from 'react-router-dom';
import './bootstrap';
import ReactDOM from 'react-dom/client';
import router from './router';
import './app.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <div>
   <RouterProvider router={router} />
  </div>
);

