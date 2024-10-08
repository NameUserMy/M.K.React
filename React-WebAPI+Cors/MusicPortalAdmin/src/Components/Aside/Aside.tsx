
import { Link } from 'react-router-dom';
import './aside.css';
const Aside = () => {

    return (
        <aside className="item2 ">
            <div>
                <ul className="menu">
                    <li className="header">
                        User menegment
                    </li>
                    <ul id="userMenu">
                        <Link to='/user' >    <li className="button" id="user-btn">
                            Users
                        </li></Link>
                        <Link to='/addUser' >  <li className="button" id="user-btn-add">
                            Add User
                        </li></Link>
                        <Link to='/editUser' > <li className="button" id="user-btn-edit">
                            Edit User
                        </li></Link>
                    </ul>
                </ul>
                <ul className="menu">
                    <li className="header">
                        Music menegment
                    </li>
                    <ul id="musicMenu">

                        <Link to='/eddGenre' > <li className="button">
                            Add Genre
                        </li></Link>
                        <Link to='/eddPerformer' >  <li className="button">
                            Add Performers
                        </li></Link>
                        <Link to='/addTrack' >  <li className="button" id="AddTrack">
                            Add track
                        </li></Link>

                        <Link to='/editGenre'><li className="button">
                            <a asp-action="EditGenre" asp-controller="Music">Edit Genre</a>
                        </li></Link>


                        <Link to='/editTrack'>
                            <li className="button">
                                <a asp-action="EditTrack" asp-controller="Music">Edit Track</a>
                            </li>
                        </Link>
                        <Link to='/editPerformer'>
                        
                        <li className="button">
                            <a asp-action="EditTrack" asp-controller="Music">Edit Performers</a>
                        </li>
                        </Link>
                    </ul>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;