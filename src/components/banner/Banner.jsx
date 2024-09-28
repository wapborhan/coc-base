import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="w-full relative h-screen"
      style={{
        background: `url("/image/banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* <Image
        src="/image/banner.jpg"
        width={1000}
        height={1000}
        alt="Banner"
        className="w-full"
      /> */}
      <div className="absolute left-2/4 -trsanslate-y-2/4  top-1/4 -translate-x-2/4 bg-slate-500 lg:p-16 p-8 rounded-xl bg-opacity-50">
        <h1 className="w-full text-white text-center font-bold lg:text-3xl text-xl">
          Best Builder & Town Hall Bases with Links for the COC Clash of Clans
          Game 2024
        </h1>
        <div className="center-container flex gap-4 justify-center mt-6">
          <Link className="coc-btn button" href="/map/townhall">
            <span>Townhall</span>
          </Link>{" "}
          <Link className="coc-btn button" href="/map/builderhall">
            <span>Builderhall</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
