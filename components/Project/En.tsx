import Title, { ETitleType } from "../Common/Title";
import Divider from "../Common/Divider";
import SmallTitle from "../Common/SmallTitle";

import "./Project2/style.less";

export default function Project() {
  return (
    <div className="project-1">
      <Title type={ETitleType.Theme}>Project</Title>
      <Divider />
      <SmallTitle>Visualization System</SmallTitle>
      <p>
        1. Based on the chart library of ECharts packaging platform style,
        package its complex json configuration into easy-to-use UI
        configuration.
      </p>
      <p>
        2. Combined with the platform search function, it can automatically
        identify groups, indicators and other information to predict user
        expectations for chart display.
      </p>
      <p>
        3. Realize draggable, multi-theme dashboard, support chart linkage
        through chart drilling, template variables, etc.
      </p>
      <Divider />
      <SmallTitle>Open Application Platform</SmallTitle>
      <p>
        1. Customize XML template language to realize automatic rendering of XML
        as React Components, encapsulate complex functions such as platform
        visualization, and facilitate users to assemble components according to
        their own needs.
      </p>
      <p>
        2. Support custom visualization, implement a set of chart rendering life
        cycle rules, and dynamically load user-defined chart rendering logic to
        the platform in the form of plug-ins.
      </p>
      <p>
        3. Support custom components to load external js that meets AMD
        specifications File to the platform to realize partial customization of
        the page.
      </p>
      <p>
        4. Support custom pages, through iframe The way to dynamically load
        user-defined applications, to achieve routing and prompt information
        communication between the platform and applications.
      </p>
      <Divider />
      <SmallTitle>Application platform basic library</SmallTitle>
      <p>
        1.
        <a href="https://www.npmjs.com/package/@qn-pandora/pandora-component">
          @qn-pandora/pandora-component
        </a>
        : Encapsulation based on Antd components to make the UI specification
        consistent with the platform.
      </p>
      <p>
        2.
        <a href="https://www.npmjs.com/package/@qn-pandora/pandora-app-component">
          @qn-pandora/pandora-app-component
        </a>
        : Encapsulate complex components in platform functions.
      </p>
      <p>
        3.
        <a href="https://www.npmjs.com/package/@qn-pandora/app-sdk">
          @qn-pandora/app-sdk
        </a>
        : The complex logic such as search and tool functions in the platform
        functions are encapsulated.
      </p>
      <Divider />
      <SmallTitle>
        <a href="https://www.npmjs.com/package/create-pandora-app">
          create-pandora-app
        </a>{" "}
        CLI Tool
      </SmallTitle>
      <p>
        1. CLI tools for creating application templates of various types of
        application platforms, oclif command and yeoman The generator is
        combined to achieve.
      </p>
      <p>
        2. Organize the scaffolding of various types of applications on the
        application platform, and support functions such as local development,
        joint debugging, viewing effects, and automatic packaging of
        applications.
      </p>
    </div>
  );
}
