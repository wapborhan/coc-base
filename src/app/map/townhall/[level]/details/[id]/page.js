import Details from "@/components/map/Details";
import axiosInstance from "@/utils/axiosInstance";

// const getMaps = async (id) => {
//   try {
//     const res = await axiosInstance.get(`/map/details/${id}`);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching: ", error);
//     return [];
//   }
// };
const Map = async ({ params }) => {
  // const mapsDetails = await getMaps(params.id);

  return <>{/* <Details mapsDetails={mapsDetails} /> */}</>;
};

export default Map;
