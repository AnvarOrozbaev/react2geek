import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
export const MyHeader: FC = () => (
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
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
