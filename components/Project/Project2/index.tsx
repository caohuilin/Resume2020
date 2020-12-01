import Title, { ETitleType } from "../../Common/Title";
import Divider from "../../Common/Divider";
import SmallTitle from "../../Common/SmallTitle";

import "./style.less";

export default function Project() {
  return (
    <div className="project-2">
      <Title type={ETitleType.Theme}>项目介绍</Title>
      <Divider />
      <SmallTitle>开放式应用平台</SmallTitle>
      <p>
        1. 自定义 XML 模板语言，实现 XML 自动渲染为 React
        组件，将平台可视化等复杂的功能进行封装，方便用户根据自身需求进行组件组装。
      </p>
      <p>
        2.
        支持自定义可视化，实现一套图表渲染生命周期规则，将用户自定义的图表渲染逻辑通过插件化的形式动态加载至平台。
      </p>
      <p>
        3. 支持自定义组件，实现加载满足 AMD 规范的外部 JS
        文件至平台，实现页面部分自定义。
      </p>
      <p>
        4. 支持自定义页面，通过 iframe
        的方式动态加载用户自定义应用，实现了平台与应用之间路由、提示信息等通信。
      </p>
      <Divider />
      <SmallTitle>应用平台基础库封装</SmallTitle>
      <p>
        1.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-component"
          target="_blank"
        >
          @qn-pandora/pandora-component
        </a>
        : 基于 Antd 组件进行封装，使其 UI 规范与平台一致。
      </p>
      <p>
        2.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-app-component"
          target="_blank"
        >
          @qn-pandora/pandora-app-component
        </a>
        : 平台功能中复杂组件进行封装。
      </p>
      <p>
        3.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/app-sdk"
          target="_blank"
        >
          @qn-pandora/app-sdk
        </a>
        : 平台功能中复杂逻辑(如: 搜索)、工具函数进行封装。
      </p>
      <Divider />
      <SmallTitle>
        <a
          href="https://www.npmjs.com/package/create-pandora-app"
          target="_blank"
        >
          create-pandora-app
        </a>{" "}
        CLI 工具
      </SmallTitle>
      <p>
        1. 创建应用平台各种类型应用模板的 CLI 工具，oclif command 与 yeoman
        生成器结合实现。
      </p>
      <p>
        2.
        整理应用平台各种类型应用的脚手架，支持应用在本地开发、联调、查看效果及自动打包等功能。
      </p>
      <Divider />
      <SmallTitle>
        <a
          href="https://www.npmjs.com/package/@qn-pandora/search-editor"
          target="_blank"
        >
          @qn-pandora/search-editor
        </a>{" "}
        搜索框组件
      </SmallTitle>
      <p>
        1. 封装平台搜索框逻辑，实现 SPL
        语言关键词高亮、联想、语法错误提示等功能。
      </p>
      <p>
        2. 实现对 SPL 语法文件(anltr)进行解析，将用户输入的搜索语句进行分析生成
        monaco-editor 支持的相关数据结构。
      </p>
    </div>
  );
}
