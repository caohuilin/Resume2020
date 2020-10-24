import Title from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

export default function Info() {
  return (
    <>
      <Title>基本信息</Title>
      <Divider />
      <ul className="info">
        <li>
          <i className="iconfont">&#xe608;</i>
          <span>
            <strong>前端工程师</strong>
          </span>
        </li>
        <li>
          <i className="iconfont">&#xe609;</i>
          <span>
            曹慧琳 | 女 | 1995 | <strong>上海</strong>
          </span>
        </li>
        <li>
          <i className="iconfont">&#xe686;</i>
          <span>
            <strong>15173266529</strong>
          </span>
        </li>
        <li>
          <i className="iconfont">&#xe613;</i>
          <span>1057275848</span>
        </li>
        <li>
          <i className="iconfont">&#xea9c;</i>
          <span>chl.2016@qq.com</span>
        </li>
        <li>
          <i className="iconfont">&#xe61e;</i>
          <span>2017年6月 | 四年工作经验</span>
        </li>
        <li>
          <i className="iconfont">&#xee2b;</i>
          <span>
            <a>https://github.com/caohuilin</a>
          </span>
        </li>
        <li>
          <i className="iconfont">&#xe8be;</i>
          <span>
            <a href="https://caohuilin.com">https://caohuilin.com</a>
          </span>
        </li>
      </ul>
      <Divider />
    </>
  );
}
