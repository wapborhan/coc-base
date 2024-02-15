import getTownhall from "@/components/fetch/getTownHall";
import Thcard from "./Thcard";

const TownHall = async () => {
  const data = await getTownhall();
  return (
    <div className="townhall grid grid-cols-4 gap-5">
      {data
        ? data.map((item, idx) => {
            return <Thcard key={idx} item={item} />;
          })
        : "Loading..."}
    </div>
  );
};

export default TownHall;
