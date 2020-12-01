import Title from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

export default function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <ul className="experience">
        <li>
          <h5>QINIU - Pandora</h5>
          <p>2017.12 ~ now</p>
          <p>
            <strong>Head of Front-end Team</strong>
          </p>
          <p>responsible for Pandora Product developing</p>
          <p>responsible for contruction of Visual System</p>
          <p>responsible for contrction of Open Application Platform</p>
        </li>
        <li>
          <h5>BTCC</h5>
          <p>2016.06 ~ 2017.12</p>
          <p>
            <strong>Star Employee</strong>
          </p>
          <p>
            responsible for Blockchain Plus Product developing and maintenance
          </p>
          <p>
            responsible for USD Trading System front-end developing and
            maintenance
          </p>
          <p>responsible for promoting the usage of TypeScript companywidely</p>
        </li>
      </ul>
      {/* <Divider /> */}
    </>
  );
}
