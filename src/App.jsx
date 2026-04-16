import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
}from 'react-router-dom'
import Mainlayout from './layouts/MainLayouts.jsx'
import NotFound from './Pages/NotFoundPage.jsx'
import HomePage from './Pages/HomePage.jsx';
import Moviepage,{movieLoader} from './Pages/moviepage.jsx';
import MoviesPage from './Pages/moviesPage.jsx';
import SearchPage from './Pages/SearchPage.jsx';
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path='moviepage/:id' element={<Moviepage />} loader={movieLoader}/>
        <Route path='moviespage' element={<MoviesPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App