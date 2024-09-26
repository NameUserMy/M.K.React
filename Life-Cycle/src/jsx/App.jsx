
import NavBar from './NavBar';
import '../css/App.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Film from './pages/film.jsx';
import Clabs from './pages/Clubs.jsx';
import Request from '../Reques.jsx';
const get=new Request();

const router = createBrowserRouter([
  { path: "/", element: <Film data={get.GetMovie()}/>},
  { path: "/film", element: <Film data={get.GetMovie()}/> },
  { path: "/clabs", element: <Clabs clubs={get.GetClubs()}/> },
]);

const Index = () => {
  
  return (
    <>
      <header id='nav'>
        <NavBar />
       </header>
      <section id="page">
       <RouterProvider router={router} />
      </section>
    </>
  )
}
export default Index
