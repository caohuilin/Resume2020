import Info from "../components/Info";
import Education from "../components/Education";
import Experience from "../components/Experience";

import "./index.less";

export default function Resume() {
  return (
    <div className="typo resume">
      <div className="left">
        <Info />
        <Experience />
        <Education />
      </div>
      <div className="right"></div>
    </div>
  );
}
