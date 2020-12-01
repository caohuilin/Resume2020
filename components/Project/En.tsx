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
        1. Providing unified style chart components using ECharts with UI
        configurations.
      </p>
      <p>
        2. Providing chart data customization using platform searching
        functions.
      </p>
      <p>
        3. Providing draggable multi-theme dashboard with drill-down and
        template variables features.
      </p>
      <Divider />
      <SmallTitle>Open Application Platform</SmallTitle>
      <p>
        1. Providing customized XML tags for third-party developers to implement
        their features.
      </p>
      <p>
        2. Providing platform standards for customized third-party components,
        such as the chart, and part or all of the page.
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
        : Providing unified style base components.
      </p>
      <p>
        2.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-app-component"
          target="_blank"
        >
          @qn-pandora/pandora-app-component
        </a>
        : Providing customized complex components.
      </p>
      <p>
        3.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/app-sdk"
          target="_blank"
        >
          @qn-pandora/app-sdk
        </a>
        : Providing complex logic (such as search) and tool functions.
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
        Providing multiple project creation templates, which features like local
        dev, testing, previewing, etc.
      </p>
      <Divider />
      <SmallTitle>
        <a
          href="https://www.npmjs.com/package/@qn-pandora/search-editor"
          target="_blank"
        >
          @qn-pandora/search-editor
        </a>{" "}
        search component
      </SmallTitle>
      <p>
        Providing a search component with SPL keyword highlighting, suggesting,
        and grammar checking features.
      </p>
    </div>
  );
}
