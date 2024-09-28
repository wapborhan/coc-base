import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center p-4 space-y-2 shadow shadow-slate-800 fixed bottom-0 bg-white w-full bg-base-200 text-base-content rounded">
      COC Base is unofficial and is not endorsed by Supercell. For more
      information see
      <Link
        className="underline"
        href="https://supercell.com/en/fan-content-policy/en/"
      >
        {" Supercell's "} Fan Content Policy
      </Link>{" "}
      .
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
