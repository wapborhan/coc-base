import Builderhall from "@/components/categories/builder-hall/Builderhall";
import axiosInstance from "@/utils/axiosInstance";

async function getTownhall() {
  try {
    const response = await axiosInstance.get(`/hall?type=builderhall`);
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
        <h1>Builderhall</h1>
        <Builderhall data={data} />
      </div>
    </main>
  );
};

export default page;
