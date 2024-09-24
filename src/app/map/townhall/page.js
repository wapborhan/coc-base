import TownHall from "@/components/categories/town-hall/TownHall";
import axiosInstance from "@/utils/axiosInstance";

async function getTownhall() {
  try {
    const response = await axiosInstance.get(`/hall?type=townhall`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching Allah names:", error);
    return [];
  }
}

const page = async () => {
  const data = await getTownhall();

  return (
    <main className="w-full">
      <div className="container py-10 px-20">
        <h1>Townhall</h1>
        <TownHall data={data} />
      </div>
    </main>
  );
};

export default page;
