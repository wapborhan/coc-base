import React from "react";
import Thcard from "../town-hall/Thcard";

const Builderhall = ({ data }) => {
  return (
    <div className="townhall grid grid-cols-4 gap-5">
      {data.length > 0
        ? data.map((item, idx) => {
            return <Thcard key={idx} item={item} />;
          })
        : "Loading..."}
    </div>
  );
};

export default Builderhall;
