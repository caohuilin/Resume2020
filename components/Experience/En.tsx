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
          <p><strong>Head of Front-end Team</strong></p>
          <p>Pandora Products</p>
          <p>Visualization System</p>
          <p>Open Application Platform</p>
        </li>
        <li>
          <h5>BTCC</h5>
          <p>2016.06 ~ 2017.12</p>
          <p><strong>Star Employee</strong></p>
          <p>Blockchain Plus Product</p>
          <p>USD Trading System</p>
          <p>Promote TypeScript</p>
        </li>
      </ul>
      <Divider />
    </>
  );
}
