import Title, { ETitleType } from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

function SkillTitle(props: React.PropsWithChildren<{}>) {
  return <span className="skill-title">{props.children}</span>;
}

export default function Skills() {
  return (
    <>
      <Title type={ETitleType.Theme}>技能清单</Title>
      <Divider />
      <ul className="skills">
        <li>
          <SkillTitle> HTML / CSS</SkillTitle>
          <p>1. 能够编写语义化 HTML，模块化 CSS</p>
          <p>
            2. 能够使用 Flexbox 实现比较复杂的布局，使用 CSS3 实现复杂的动画
          </p>
          <p>3. 能够使用 Less 高效编写 CSS</p>
          <p>4. 了解浏览器 DOM 加载和渲染原理</p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>
            1. 熟悉 TypeScript，熟练掌握如何在项目中集成其工具链，了解其高级类型
          </p>
          <p>2. 熟悉 JavaScript 核心基础；掌握 ES6 常用语法</p>
        </li>
        <li>
          <SkillTitle> React / Mobx / Antd</SkillTitle>
          <p>1. 熟悉使用 React、Mobx 构建单页 Web 应用</p>
          <p>2. 熟练使用 React Hooks</p>
          <p>
            3. 熟练使用 Antd 快速搭建系统应用，了解其源码并可对其进行进一步封装
          </p>
        </li>
        {/* <li>
          <SkillTitle>可视化</SkillTitle>
          <p>1. 熟练使用 ECharts 快速搭建可视化图表</p>
          <p>2. 了解并使用 G6 搭建关系型图表</p>
          <p>3. 了解并使用 D3 实现底层可视化图表</p>
        </li> */}
        <li>
          <SkillTitle> Webpack / Rollup / Lerna</SkillTitle>
          <p>1. 熟练使用 Webpack 对项目进行模块打包并了解其原理</p>
          <p>2. 熟练进行 Webpack 打包性能优化</p>
          <p>3. 了解 Rollup 进行模块化打包流程及原理</p>
          <p>4. 了解使用 Lerna 进行多包管理</p>
        </li>
        <li>
          <SkillTitle> 前端工程化</SkillTitle>
          <p>
            1. 有过大型单页 Web
            应用实战经验，处理过大规模的数据变更场景下的优化，了解前端性能优化与调试技巧
          </p>
          <p>2. 熟练使用 rebase、cherry-pick 等 Git 命令，了解 CI、CD 流程</p>
          <p>3. 熟练使用 Jest 单元测试框架，熟悉各种测试技巧</p>
        </li>
      </ul>
    </>
  );
}
