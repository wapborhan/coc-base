import { Suspense } from "react";
import Loading from "../loading";

export default function Map({ children }) {
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-20"></div>
      {/* <Suspense fallback={<Loading />}> */}
      {children}
      {/* </Suspense> */}
      <div className="pt-20"></div>
    </div>
  );
}
