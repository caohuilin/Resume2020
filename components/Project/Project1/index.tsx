import Title, { ETitleType } from "../../Common/Title";
import Divider from "../../Common/Divider";
import SmallTitle from "../../Common/SmallTitle";

import "./style.less";

export default function Project() {
  return (
    <div className="project-1">
      <Title type={ETitleType.Theme}>项目介绍</Title>
      <Divider />
      <SmallTitle>可视化系统</SmallTitle>
      <p>
        1. 基于 ECharts 封装平台风格的图表库，将其复杂 json 配置进行包装为易用
        UI 配置。
      </p>
      <p>
        2. 结合平台搜索功能，实现自动识别分组、指标等信息预测用户期望图表展示。
      </p>
      <p>
        3. 实现可拖拽、多主题仪表盘，支持通过图表下钻，模板变量等实现图表联动。
      </p>
    </div>
  );
}
