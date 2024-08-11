import React from 'react'
import Profile from './Profile';
import { Link, Outlet } from 'react-router-dom';

const profiles = [1,2,3,4,5];

const Profiles = () => {
  return (
    <div className='links'>
        <div>
        {
            profiles.map( (profile) => (
                <Link key={Profile} to={`/profiles/${profile}`}>
                    Profile {profile}
                </Link>
            ))
        }
        </div>
        <Outlet />
    </div>
  )
}

export default 
Profiles