"use client";

import React from 'react';
import Header from './Header';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Naveber = () => {

  const router = useRouter();
  console.log("object");

  const handleLogout = () => {
    // এখানে চাইলে localStorage বা cookie clear করতে পারেন
    // localStorage.removeItem("token")
    router.push("/sign-in"); // Logout → Sign In page
  };

  const NavItems = [
    { route: "Home", path: "/" },
    { route: "About", path: "/about" },
    { route: "Blog", path: "/blog" }
  ];

  return (
    <div>
      <Header />

      <div className="navbar bg-base-100 shadow-sm">

        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {NavItems.map((item, i) =>
                <li key={i}>
                  <Link href={item.path}>{item.route}</Link>
                </li>
              )}
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavItems.map((item, i) =>
              <li key={i}>
                <Link href={item.path}>{item.route}</Link>
              </li>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-3">

          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="M3 3h18M3 3l3 13h12l3-13M6 16a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>

              {/* Logout Button — Redirect to Sign In */}
              <li>
                <button onClick={handleLogout} className="text-left">
                  Logout
                </button>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Naveber;
