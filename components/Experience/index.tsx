import Title from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

export default function Experience() {
  return (
    <>
      <Title>工作经历</Title>
      <ul className="experience">
        <li>
          <h5>七牛云大数据团队(Pandora)</h5>
          <p>2017.12 ~ 至今</p>
          <p><strong>上海前端负责人</strong></p>
          <p>负责 Pandora 产品的迭代</p>
          <p>构建可视化系统</p>
          <p>构建开放式应用平台</p>
        </li>
        <li>
          <h5>比特币中国(BTCC)</h5>
          <p>2016.06 ~ 2017.12</p>
          <p><strong>明星员工</strong></p>
          <p>负责区块链+项目构建及维护</p>
          <p>负责美元交易系统</p>
          <p>推行 TypeScript</p>
        </li>
      </ul>
      <Divider />
    </>
  );
}
