import Banner from "@/components/banner/Banner";
import Categories from "@/components/categories/Categories";
import React from "react";

// async function getTownhall() {
//   const res = await fetch(`${process.env.API_URL}/api/townhall`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
const page = async () => {
  // const data = await getTownhall();
  return (
    <main className="w-full">
      <Banner />
      {/* <Categories data={data} /> */}
    </main>
  );
};

export default page;
