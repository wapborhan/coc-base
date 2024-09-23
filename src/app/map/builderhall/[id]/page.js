"use client";

import { useRouter } from "next/navigation";

const Map = ({ params }) => {
  const router = useRouter();
  return (
    <div className="flex gap-5">
      TH is :{params.id}
      <button type="button" onClick={() => router.push("/")}>
        Back
      </button>
    </div>
  );
};

export default Map;
