"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";

const Maps = ({ maps, id, path }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [halls, setHalls] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const mapsPerPage = 9;

  useEffect(() => {
    axiosInstance
      .get(
        `${
          path === "townhall" ? "/hall?type=townhall" : "/hall?type=builderhall"
        }`
      )
      .then((res) => {
        setHalls(res.data);
      })
      .catch((err) => console.error(err));
  }, [path]);

  const filteredMaps = maps.filter((map) => {
    if (filter === "ALL") return true;
    return map.mapType === filter;
  });

  // Calculate the indexes for the maps to be displayed
  const indexOfLastMap = currentPage * mapsPerPage;
  const indexOfFirstMap = indexOfLastMap - mapsPerPage;
  const currentMaps = filteredMaps.slice(indexOfFirstMap, indexOfLastMap);

  // Calculate total pages
  const totalPages = Math.ceil(filteredMaps.length / mapsPerPage);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="dd space-y-5">
      <div className="head text-center">
        <h1>
          Best {id} Bases for COC Clash of Clans 2024 - {/* {"Town"}  */}
          Hall Level {id.split("_")[1]} Layouts
        </h1>
      </div>
      <div className="w-full flex justify-between gap-4 relative">
        <div className="sidebar w-3/12 ">
          <div className="sticky top-5">
            <h1 className="border-b-2">Filter</h1>
            <div className="filter py-5 space-y-5">
              <h1>Map Type</h1>
              <ul>
                <li
                  className={
                    filter === "ALL"
                      ? "text-blue-500 cursor-auto"
                      : "cursor-pointer"
                  }
                  onClick={() => setFilter("ALL")}
                >
                  ALL
                </li>
                <li
                  className={
                    filter === "farming"
                      ? "text-blue-500 cursor-auto"
                      : "cursor-pointer"
                  }
                  onClick={() => setFilter("farming")}
                >
                  Farming
                </li>
                <li
                  className={
                    filter === "defence"
                      ? "text-blue-500 cursor-auto"
                      : "cursor-pointer"
                  }
                  onClick={() => setFilter("defence")}
                >
                  Defence
                </li>
                <li
                  className={
                    filter === "war"
                      ? "text-blue-500 cursor-auto"
                      : "cursor-pointer"
                  }
                  onClick={() => setFilter("war")}
                >
                  War
                </li>
              </ul>
            </div>
            <div className="filter space-y-3">
              <h1>Bases</h1>
              <ul className="space-y-6">
                {halls.map((hall) => {
                  const active = id === hall.link;
                  return (
                    <Link href={`/map/${path}/${hall.link}`} key={hall.link}>
                      <li
                        className={`capitalize ${active && "text-green-800"}`}
                      >
                        {path} {"-"} {hall.link.split("_")[1]}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="maps w-9/12">
          <h1>Maps</h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            {currentMaps.length > 0
              ? currentMaps.map((item) => {
                  return <Card key={item?._id} map={item} />;
                })
              : "No Layout Found."}
          </div>
          <div className="pagination flex justify-between mt-5">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${currentPage === 1 ? "opacity-50" : ""}`}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 ${
                currentPage === totalPages ? "opacity-50" : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
