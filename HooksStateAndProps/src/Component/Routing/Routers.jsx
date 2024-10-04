import {createBrowserRouter} from 'react-router-dom';

import Root from './Root';
import Pet from '../Pet/Pet';
import MagicBall from '../MagicBall/MagicBall';


export const Rout=createBrowserRouter([
{
    path:'/',element:<Root/>,
    children: [
            {path: '/', element: <Pet/>},
            {path:'/magicBall',element:<MagicBall/>},
    ]
}]);