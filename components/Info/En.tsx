import Title from "../Common/Title";
import Divider from "../Common/Divider";
import Icon, { EIconType } from "../Common/Icon";

import "./style.less";

export default function Info() {
  return (
    <>
      <Title>
        <strong>Huilin Cao</strong>
      </Title>
      <Divider />
      <ul className="info">
        <li>
          <Icon type={EIconType.Flag} />
          <span>
            <strong>Front-end Engineer</strong>
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
          <span>June 2017 | HNUST</span>
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
