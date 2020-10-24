import Info from "../components/Info";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";

import "./index.less";

export default function Resume() {
  return (
    <div className="typo resume">
      <div className="page-1">
        <div className="left">
          <Info />
          <Experience />
          <Education />
        </div>
        <div className="right">
          <Skills />
          <Project1 />
        </div>
      </div>
      <div className="page-2">
        <Project2 />
      </div>
    </div>
  );
}
