import Title from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

export default function Info() {
  return (
    <div className="info">
      <Title>基本信息</Title>
      <Divider />
      <ul>
        <li>曹慧琳 | 女 | 1995 | <strong>上海</strong></li>
        <li>湖南科技大学 | 物联网工程 </li>
        <li>
          <a>www.caohuilin.com</a>
        </li>
        <li>T: <strong>15173266529</strong></li>
        <li>E: chl.2016@qq.com</li>
        <li>2017年6月 | 四年工作经验</li>
      </ul>
    </div>
  );
}
