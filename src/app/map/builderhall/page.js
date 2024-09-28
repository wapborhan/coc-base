import Hall from "@/components/hall/Hall";
import axiosInstance from "@/utils/axiosInstance";

async function getTownhall() {
  try {
    const response = await axiosInstance.get(`/hall?type=builderhall`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
}

const page = async () => {
  const data = await getTownhall();
  return (
    <main className="w-full">
      <div className="container lg:py-10 lg:px-20">
        <h1>Builderhall</h1>
        <Hall data={data} />
      </div>
    </main>
  );
};

export default page;
