import React from "react";
import TownHall from "./town-hall/TownHall";
import Builderhall from "./builder-hall/Builderhall";

const Categories = ({ data }) => {
  return (
    <>
      <h1>Townhall</h1>
      <div className="container lg:px-36 md:px-16 px-0 py-16">
        <TownHall data={data} />
      </div>
      <h1>Builderhall</h1>
      <div className="container lg:px-36 md:px-16 px-0 py-16">
        <Builderhall data={data} />
      </div>
    </>
  );
};

export default Categories;
