import Profile from './../pages/Profile';
import { Link, Outlet } from 'react-router-dom';


import './../styles/HoverMenu.css';

const DropDown = () => {

    const profiles = [1,2,3,4,5];

    return (
        <div className="dropdown-menu">
        
            <ul>
                {profiles.map( (profile) => (
                    <li>
                        <Link key={Profile} to={`/profiles/${profile}`}>
                            Profile {profile}
                        </Link>
                    </li>
                ))}
            </ul>
        {/* <div>
        {
            profiles.map( (profile) => (
                <Link key={Profile} to={`/profiles/${profile}`}>
                    Profile {profile}
                </Link>
            ))
        }
        </div>
        <Outlet /> */}
    </div>
  )
}

export default DropDown