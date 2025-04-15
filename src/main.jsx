import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import AddBook from './pages/AddBook.jsx';
import BookDetails from './pages/BookDetails.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import Home from './pages/Home.jsx';
import { Provider } from 'react-redux';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },{
        path: "/addbook",
        element: <AddBook/>
     },{
       path: "/browsebooks/:category",
       element: <BrowseBooks/>
     },{
       path: "/home",
       element: <Home/>
     },{
      path: "/bookData/:id",
      element: <BookDetails/>
    }
    ],
    errorElement: <NotFound />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
);
