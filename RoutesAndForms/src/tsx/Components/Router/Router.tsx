import { createBrowserRouter } from 'react-router-dom';

import Root from '../../Pages/RootPage/Root.tsx';
import City from '../../Pages/CityPage/City.tsx';
import Form from '../../Pages/FormPage/Form.tsx';
import AboutCity from '../../Pages/CityPage/AboutCity/AboutCity.tsx';
import Favorite from '../../Pages/CityPage/FavoriteCity/Favorite.tsx';
import Sight from '../../Pages/CityPage/SightCity/Sight.tsx';
import Photos from '../../Pages/CityPage/PhotoCity/Photos.tsx';
import UserInfo from '../../Pages/FormPage/FormComponent/UserInfo.tsx';

export const router = createBrowserRouter([

    {
        path: '/', element: <Root />,
        children: [
            { path: '/', element: <City />,children:[
                {path:'/',element:<AboutCity/>},
                {path:'/favorite',element:<Favorite/>},
                {path:'/sight',element:<Sight/>},
                {path:'/photos',element:<Photos/>}
            ] },
            { path: '/form', element: <Form /> },
            { path: '/form/userInfo', element: <UserInfo /> },

        ]

    }
]);