// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout({ onRegister, user }) {
  return (
    <div className="overflow-x-hidden">
      <Navbar onRegister={onRegister} user={user} />
      <main className="pt-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

