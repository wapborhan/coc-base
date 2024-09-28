"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [linkActive, setLinkActive] = useState(false);
  return (
    <header className="navbar bg-base-100 shadow-md py-4 lg:px-24 px-8 fixed top-0 left-0 bg-white z-30 w-full">
      <div className="container flex">
        <div className="flex-1">
          <Link href="/" className="text-xl">
            COC Base
          </Link>
        </div>
        <div className="lg:flex-none hidden">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <li>
              <Link href="/map/townhall" className="">
                Townhall
              </Link>
            </li>
            <li>
              <Link href="/map/builderhall" className="">
                Builderhall
              </Link>
            </li>{" "}
            <li>
              <Link href="/" className="">
                Troops
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                Heroes
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                Spells
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                Siege Machine
              </Link>
            </li>
          </ul>
        </div>
        <div className="hambergarge text-lg">
          {linkActive ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setLinkActive(!linkActive)}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"
                  fill="#1F2328"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              onClick={() => setLinkActive(!linkActive)}
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          )}
        </div>
        <div
          className={`lg:hidden transition-all flex-none absolute top-16 bg-white p-3 rounded-lg border-2 ${
            linkActive ? "right-3" : "-right-60"
          }`}
        >
          <ul className="menu menu-horizontal px-1 blockc space-y-5 ">
            <li>
              <Link
                href="/map/townhall"
                className=""
                onClick={() => setLinkActive(!linkActive)}
              >
                Townhall
              </Link>
            </li>
            <li>
              <Link
                href="/map/builderhall"
                className=""
                onClick={() => setLinkActive(!linkActive)}
              >
                Builderhall
              </Link>
            </li>{" "}
            <li>
              <Link
                href="/"
                className=""
                onClick={() => setLinkActive(!linkActive)}
              >
                Troops
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=""
                onClick={() => setLinkActive(!linkActive)}
              >
                Heroes
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=""
                onClick={() => setLinkActive(!linkActive)}
              >
                Spells
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=""
                onClick={() => setLinkActive(!linkActive)}
              >
                Siege Machine
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
