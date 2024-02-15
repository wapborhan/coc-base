import Banner from "@/components/banner/Banner";
import React from "react";
import Categories from "../../components/categories/Categories";

const page = () => {
  return (
    <main className="w-full">
      <div className="container lg:px-36 md:px-16 px-0 py-16">
        <Banner />
        <Categories />
      </div>
    </main>
  );
};

export default page;
