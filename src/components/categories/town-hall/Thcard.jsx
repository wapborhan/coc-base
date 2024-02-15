import Image from "next/image";
import Link from "next/link";
import React from "react";

const Thcard = ({ item }) => {
  return (
    <Link href={`map/${item?.link}`}>
      <div className="card min-w-16 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <Image
            width={150}
            height={150}
            src={item?.image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item?.name}</h2>
          <div className="card-actions"></div>
        </div>
      </div>
    </Link>
  );
};

export default Thcard;
