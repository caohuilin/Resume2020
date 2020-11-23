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
        1. Based on ECharts encapsulation platform style chart library, its
        complex json configuration is packaged into an easy-to-use UI
        configuration.
      </p>
      <p>
        2. Combined with the platform search function, it realizes automatic
        identification of groups, indicators and other information to predict
        user expectation chart display.
      </p>
      <p>
        3. Realize drag-and-drop, multi-theme dashboard, support chart linkage
        through chart drilling, template variables, etc.
      </p>
      <Divider />
      <SmallTitle>Open Application Platform</SmallTitle>
      <p>
        1. Customize XML template language, realize XML automatic rendering as
        React components, encapsulate complex functions such as platform
        visualization, and facilitate users to assemble components according to
        their own needs.
      </p>
      <p>
        2. Support custom visualization, realize a set of chart rendering life
        cycle rules, and dynamically load user-defined chart rendering logic to
        the platform through plug-in.
      </p>
      <p>
        3. Support custom components to load external JS files that meet AMD
        specifications to the platform, and realize page partial customization.
      </p>
      <p>
        4. Support custom page, dynamic loading of user-defined applications
        through the way of iframe, to achieve the communication between the
        platform and the application routing, prompt information and so on.
      </p>
      <Divider />
      <SmallTitle>Application Platform Base Library</SmallTitle>
      <p>
        1.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-component"
          target="_blank"
        >
          @qn-pandora/pandora-component
        </a>
        : Encapsulates based on Antd components to make their UI specifications
        consistent with the platform.
      </p>
      <p>
        2.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-app-component"
          target="_blank"
        >
          @qn-pandora/pandora-app-component
        </a>
        : Encapsulating complex components in platform functionality.
      </p>
      <p>
        3.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/app-sdk"
          target="_blank"
        >
          @qn-pandora/app-sdk
        </a>
        : complex logic (such as search) and tool functions in platform
        functions are encapsulated.
      </p>
      <Divider />
      <SmallTitle>
        <a
          href="https://www.npmjs.com/package/create-pandora-app"
          target="_blank"
        >
          create-pandora-app
        </a>{" "}
        CLI Tool
      </SmallTitle>
      <p>
        1. Create application platform various types of application template CLI
        tools, oclif command and yeoman generator combined to achieve.
      </p>
      <p>
        2. Organize the scaffolding of various types of applications on the
        application platform, and support the functions of local development,
        joint adjustment, viewing effect and automatic packaging of
        applications.
      </p>
    </div>
  );
}
