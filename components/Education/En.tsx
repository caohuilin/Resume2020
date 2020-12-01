import Title, { ETitleType } from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

export default function Education() {
  return (
    <>
      <Title type={ETitleType.Theme}>Education</Title>
      <Divider />
      <ul className="education">
        <li>Hunan University Of Science And Technology</li>
        <li>Internet of Things Engineering</li>
        <li>2013.09 ~ 2017.06</li>
        <li>GPA 3.7 / 4.0</li>
      </ul>
    </>
  );
}
