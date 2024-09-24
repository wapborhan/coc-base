import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center p-4 space-y-2 shadow shadow-slate-800 fixed bottom-0 bg-white w-full bg-base-200 text-base-content rounded">
      <nav className="flex justify-center gap-4">
        <Link href="/" className="link link-hover">
          About us
        </Link>
        <Link href="/" className="link link-hover">
          Contact
        </Link>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by COC
          Base. Developed by{" "}
          <Link href="http://www.srdreamlab.com">SR Dream Lab</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
