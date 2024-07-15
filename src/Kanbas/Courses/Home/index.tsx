import Modules from "../Modules";
import CourseStatus from "./Status";
import "./index.css";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex flex-column flex-lg-row w-100">
      <div className="flex-grow-1 order-2 order-lg-1 p-3">
        <Modules />
      </div>
      <div className="flex-shrink-0 order-1 order-lg-2 p-3 d-none d-lg-block ms-auto">
        <CourseStatus />
      </div>
    </div>
  );
}