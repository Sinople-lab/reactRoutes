import Profile from './../pages/Profile';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import './../styles/HoverMenu.css';

const DropDown = () => {

    const StyledLink = styled(Link)`
        color: gray;
        text-decoration: none;
        border: none;
        cursor: pointer;
        `;

    const profiles = [1,2,3,4,5];

    return (
        <div className="dropdown-menu">
        
            <ul>
                {profiles.map( (profile) => (
                    <li>
                        <StyledLink  key={Profile} to={`/profiles/${profile}`}>
                            Profile {profile}
                        </StyledLink>
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