import Card from "./Card";

const Maps = ({ maps, id }) => {
  return (
    <div className="dd space-y-5">
      <div className="head text-center">
        <h1>
          Best {id} Bases for COC Clash of Clans 2024 - {/* {"Town"}  */}
          Hall Level {id.split("_")[1]} Layouts
        </h1>
      </div>
      <div className="w-full flex relative">
        <div className="sidebar w-3/12 ">
          <div className="sticky top-5">
            <h1>Sidebar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              ad unde, dolorem recusandae doloribus facere totam voluptatem
              temporibus ipsa praesentium suscipit architecto officiis dicta
              repellendus rem natus perferendis quam iste.
            </p>
          </div>
        </div>

        <div className="maps w-9/12">
          <h1>Maps</h1>
          <div className="grid grid-cols-3 gap-4">
            {maps.length > 0
              ? maps.map((item) => {
                  return <Card key={item?._id} map={item} />;
                })
              : "No Layout Found."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
