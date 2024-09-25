"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [th, setTh] = useState([]);
  const [bh, setBh] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/hall?type=townhall`)
      .then((res) => {
        const data = res.data.map((item) => ({
          label: item.link,
          value: item.link,
        }));
        setTh(data);
      })
      .catch((err) => console.error(err));
    axiosInstance
      .get(`/hall?type=builderhall`)
      .then((res) => {
        const data = res.data.map((item) => ({
          label: item.link,
          value: item.link,
        }));
        setBh(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const submitContactForm = async (event) => {
    event.preventDefault();

    const inputData = {
      title: event.target.title.value,
      image: event.target.image.value,
      link: event.target.link.value,
      mapType: event.target.mapType.value,
      type: selectedType,
      level: selectedLevel,
      tags: event.target.tags.value.replace(/\s+/g, "").split(","),
      views: 0,
      addedYear: new Date().getFullYear(),
    };

    axiosInstance
      .post("/map", inputData)
      .then((res) => {
        if (res.data.acknowledged === true) {
          event.target.reset();
          toast.success("Successfully toasted!");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedLevel(""); // Reset level when type changes
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const levelOptions = selectedType === "townhall" ? th : bh;

  return (
    <div className="max-w-screen-md mx-auto p-5 pt-20 pb-20">
      <div className="text-center mb-8">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Add <span className="text-indigo-600">Maps</span>
        </h3>
      </div>

      <form className="w-full" onSubmit={submitContactForm}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-200 focus:border-gray-500"
              type="text"
              placeholder="Title"
              name="title"
              // border-red-500
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Map Image Link
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border-gray-200"
              type="text"
              name="image"
              placeholder="Map Image Link"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Base Layout Link
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-200 focus:border-gray-500"
              type="text"
              name="link"
              placeholder="Base Layout Link"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 w-full justify-between -mx-3 mb-6">
          <div className="w-full md:w-3/12 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type
            </label>
            <select
              class="text-black/70 px-3 bg-gray-200 py-2 transition-all cursor-pointer hover:border-blue-600/30 border text-gray-700 border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30  focus:border-gray-500"
              name="type"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="townhall">Townhall</option>
              <option value="builderhall">Builderhall</option>
            </select>
          </div>
          <div className="w-full md:w-3/12 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Level
            </label>
            <select
              class="text-black/70 px-3 bg-gray-200 py-2 transition-all cursor-pointer hover:border-blue-600/30 border text-gray-700 border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30  focus:border-gray-500"
              name="level"
              value={selectedLevel}
              onChange={handleLevelChange}
              disabled={!selectedType}
            >
              <option value="" disabled selected>
                Select an option
              </option>
              {levelOptions.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-3/12 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Map Type
            </label>
            <select
              class="text-black/70 px-3 bg-gray-200 py-2 transition-all cursor-pointer hover:border-blue-600/30 border text-gray-700 border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30  focus:border-gray-500"
              name="mapType"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="farming">Farming</option>
              <option value="defence">Defence</option>
              <option value="war">War</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tags
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-200 focus:border-gray-500"
              type="text"
              name="tags"
              placeholder="tags separate ,"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="flex justify-between w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded w-full"
              type="submit"
            >
              Add Maps
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
