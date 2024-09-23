import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-md">
      <div className="container lg:mx-36 md:mx-16 mx-0">
        <div className="flex-1">
          <Link href="/" className="text-xl">
            COC Base
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
      </div>
    </header>
  );
};

export default Header;
