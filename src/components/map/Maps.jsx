"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Maps = ({ maps, id, path }) => {
  const router = useRouter();
  const [selectedBase, setSelectedBase] = useState("");
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

  useEffect(() => {
    const matchingHall = halls.find((hall) => hall.link === id); // Find the matching hall
    if (matchingHall) {
      setSelectedBase(`/map/${path}/${matchingHall.link}`); // Set the selected base if found
    }
  }, [id, halls, path]);

  const handleSelectChange = (e) => {
    const selectedUrl = e.target.value;
    setSelectedBase(selectedUrl); // Update selected base state
    router.push(selectedUrl); // Navigate to the selected URL
  };

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
      <div className="sidenav lg:hidden flex justify-between">
        <div className="filter">
          <h1>Map Type</h1>
          <select
            name="mapType"
            id="mapType"
            className="border-2 p-2 rounded-lg"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="farming">Farming</option>
            <option value="defence">Defence</option>
            <option value="war">War</option>
          </select>
        </div>
        <div className="filter ">
          <h1>Bases</h1>
          <select
            className="border-2 p-2 rounded-lg"
            onChange={handleSelectChange}
            defaultValue={selectedBase}
          >
            {halls.map((hall) => {
              const baseUrl = `/map/${path}/${hall.link}`;
              return (
                <option value={baseUrl} key={hall.link}>
                  {path} {"-"} {hall.link.split("_")[1]}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 relative">
        <div className="sidebar lg:block hidden lg:w-3/12 w-5/12">
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
                        className={`capitalize text-sm ${
                          active && "text-green-800"
                        }`}
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

        <div className="maps lg:w-9/12 w-full">
          <h1>Maps</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-5">
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
