import { createBrowserRouter } from 'react-router-dom';

import Root from '../../Pages/Root/Root'
import AddUser from '../../Pages/AddUser/AddUser';
import EditUser from '../../Pages/EditUser/EditUser';
import User from '../../Pages/User/User';
import Genre from '../../Pages/AddGenre/Genre';
import Performer from '../../Pages/AddPerformer/Performer';
import Track from '../../Pages/AddTrack/Track';
import EditGenre from '../../Pages/EditGenre/EditGenre.tsx';
import EditTrack from '../../Pages/EditTrack/EditTrack';
import EditPerformers from '../../Pages/EditPerformers/EditPerformers';



export const router = createBrowserRouter([

    {
        path: '/', element: <Root />,
        children: [
            { path: '/addUser', element: <AddUser />},
            { path: '/editUser', element: <EditUser />},
            { path: '/user', element: <User/>},
            { path: '/eddGenre', element: <Genre/>},
            { path: '/eddPerformer', element: <Performer/>},

            { path: '/addTrack', element: <Track/>},
            { path: '/editGenre', element: <EditGenre/>},
            { path: '/editTrack', element: <EditTrack/>},
            { path: '/editPerformer', element: <EditPerformers/>},
        ]
       

    }
]);


