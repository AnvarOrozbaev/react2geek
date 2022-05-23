import React, { FC } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { selectAuth } from '../../pages/profile/profileSlice';
import { logOut } from '../../services/firebase';
import './MyHeader.scss';
const pages = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
];
export const MyHeader: FC = () => { 
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const handleSignOut = async () => {

    try {
      await logOut();
    } catch (err) {
      console.log((err as Error).message);
    }
  };
  return (
  <>
    <header>
      <ul className="menu-list">
        {pages.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({
                color: isActive ? 'green' : '#864f12',
              })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
          </ul>
         {auth ? (
       
        <button onClick={handleSignOut}>logout</button>
      ) : (
        
        <>
          <Link to="/signin">SingIn</Link> |<Link to="/signup">SingUp</Link>
        </>
      )}
    
    </header>
    <main>
      <Outlet />
    </main>
  </>
)};
