import Thcard from "./Thcard";

const TownHall = ({ data, path }) => {
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

export default TownHall;
