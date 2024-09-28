"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Details = ({ mapsDetails }) => {
  const { image, title, link, tags, views, addedYear, mapType } = mapsDetails;
  const router = useRouter();
  return (
    <div className="details lg:w-10/12 mx-auto">
      <div className="back py-5">
        <button
          className="flex gap-3 border-2 px-14 py-3 rounded-xl"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.702"
            height="21.928"
          >
            <path d="M11.629 12.553c4.356.341 10.018 2.844 10.018 9.375h.979c.084-.925.693-8.982-3.653-13.74a10.506 10.506 0 0 0-7.344-3.352V0L0 9.044 11.629 18.1z" />
          </svg>{" "}
          Back
        </button>
      </div>
      <div className="card">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={500}
          className="w-full rounded-2xl"
        />
        <div className="content text-center mx-auto w-full space-y-5">
          <div className="base">
            <h1>
              Base Built by:{" "}
              <Link href="https://www.srdreamlab.com" target="__BLANK">
                SR Dream Lab
              </Link>
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="tags flex gap-3 items-center">
              Tags:
              {tags.map((tag) => {
                return (
                  <span className="border-2 p-2 rounded-lg" key={tag}>
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="views">Views: {views}</div>
          </div>
          {link ? (
            <Link className="coc-btn button" href={link}>
              <span> Copy this Plan 😊</span>
            </Link>
          ) : (
            <button
              className="coc-btns buttons lg:px-24 px-8 lg:py-5 py-2 bg-gray-300 rounded-xl"
              disabled
            >
              <span className="text-white">No Copy Link Available</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
