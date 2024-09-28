import Thcard from "./Thcard";

const Hall = ({ data }) => {
  return (
    <div className="hall grid lg:grid-cols-4  md:grid-cols-2 grid-cols-2 gap-5">
      {data.length > 0
        ? data.map((item, idx) => {
            return <Thcard key={idx} item={item} />;
          })
        : "Loading..."}
    </div>
  );
};

export default Hall;
