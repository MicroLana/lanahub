// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout({ onRegister, user }) {
  return (
    <>
      <Navbar onRegister={onRegister} user={user} />
      <main className="pt-16">{/* adjust this if you make navbar fixed */} 
        <Outlet />
      </main>
    </>
  );
}
