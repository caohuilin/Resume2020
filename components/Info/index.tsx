import Title from "../Common/Title";
import Divider from "../Common/Divider";
import Icon, { EIconType } from "../Common/Icon";

import "./style.less";

export default function Info() {
  return (
    <>
      <Title>基本信息</Title>
      <Divider />
      <ul className="info">
        <li>
          <Icon type={EIconType.Flag} />
          <span>
            <strong>前端工程师</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.Info} />
          <span>
            曹慧琳 | 女 | 1995 | <strong>上海</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.Phone} />
          <span>
            <strong>15173266529</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.WeiChat} />
          <span>caohuilin9588</span>
        </li>
        <li>
          <Icon type={EIconType.Email} />
          <span>chl.2016@qq.com</span>
        </li>
        <li>
          <Icon type={EIconType.Education} />
          <span>2017年6月 | 四年工作经验</span>
        </li>
        <li>
          <Icon type={EIconType.Github} />
          <span>
            <a href="https://github.com/caohuilin" target="_blank">
              caohuilin
            </a>
          </span>
        </li>
        <li>
          <Icon type={EIconType.Website} />
          <span>
            <a href="https://caohuilin.com" target="_blank">
              caohuilin.com
            </a>
          </span>
        </li>
      </ul>
      <Divider />
    </>
  );
}
