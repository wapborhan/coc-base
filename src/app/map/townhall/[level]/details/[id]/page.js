import Maps from "@/components/map/Maps";
import axiosInstance from "@/utils/axiosInstance";

const getMaps = async (id) => {
  try {
    const res = await axiosInstance.get(`/map/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching: ", error);
    return [];
  }
};
const Map = async ({ params }) => {
  const maps = await getMaps(params.id);

  return (
    <>
      <h1>Under Constraction</h1>
    </>
  );
};

export default Map;
