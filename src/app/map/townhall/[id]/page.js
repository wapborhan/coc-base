import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";

// const getMaps = async (id) => {
//   try {
//     const res = await axiosInstance.get(`/map/${id}`);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching Allah names:", error);
//     return [];
//   }
// };
const Map = async ({ params }) => {
  // const maps = await getMaps(params.id);

  return (
    <div className="flex gap-5">
      <div className="d">
        TH is :{params.id}
        <br />
        <br />
        {/* {maps.length > 0
          ? maps.map(({ title, image, _id }) => {
              console.log(title);

              return (
                <div key={_id}>
                  <li>{title}</li>
                  <li>
                    <Image
                      src={image}
                      alt={title}
                      width={100}
                      height={100}
                    ></Image>
                  </li>
                </div>
              );
            })
          : "No Layout Found."} */}
      </div>
    </div>
  );
};

export default Map;
