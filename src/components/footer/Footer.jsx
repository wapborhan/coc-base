import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          About us
        </Link>
        <Link href="/" className="link link-hover">
          Contact
        </Link>
        <Link href="/" className="link link-hover">
          Jobs
        </Link>
        <Link href="/" className="link link-hover">
          Press kit
        </Link>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by COC
          Base. | Developed by{" "}
          <Link href="http://www.srdreamlab.com">SR Dream Lab</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
