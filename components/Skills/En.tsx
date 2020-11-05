import Title, { ETitleType } from "../Common/Title";
import Divider from "../Common/Divider";

import "./style.less";

function SkillTitle(props: React.PropsWithChildren<{}>) {
  return <span className="skill-title">{props.children}</span>;
}

export default function Skills() {
  return (
    <>
      <Title type={ETitleType.Theme}>Skills</Title>
      <Divider />
      <ul className="skills">
        <li>
          <SkillTitle> HTML / CSS</SkillTitle>
          <p>1. Able to write semantic HTML and initialize CSS</p>
          <p>
            2. Able to use Flexbox to implement more complex layouts and CSS3 to implement complex animations
          </p>
          <p>3. Able to write CSS efficiently using Less</p>
          <p>4. Understand the principle of browser,  like DOM loading and rendering</p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>1. Familiar with TypeScript. Familiar with its tool chain and advanced type</p>
          <p>2. Familiar with JavaScript and ES6 common syntax</p>
        </li>
        <li>
          <SkillTitle> React / Mobx / Antd</SkillTitle>
          <p>1. Familiar with building single-page web applications using React and Mobx</p>
          <p>2. Familiar with React Hooks</p>
          <p>
            3. Familiar with build system applications using Antd quickly. Understand Antd's source code.
          </p>
        </li>
        <li>
          <SkillTitle>Visualization</SkillTitle>
          <p>1. Familiar with ECharts</p>
          <p>2. Understand and use G6 to build relational charts</p>
          <p>3. Understand and use D3 to implement low-level visualization charts</p>
        </li>
        <li>
          <SkillTitle> Webpack / Rollup / Lerna</SkillTitle>
          <p>1. Proficiency in using Webpack to package modules and understand its principles</p>
          <p>2. Proficiency in Webpack packaging performance optimization</p>
          <p>3. Understand Rollup's modular packaging process and principle</p>
          <p>4. Learn about multi-package management with Lerna</p>
        </li>
        <li>
          <SkillTitle> Engineering</SkillTitle>
          <p>1. Have practical experience in large-scale single-page Web applications, deal with optimization in large-scale data change scenarios, and understand front-end performance optimization and debugging skills</p>
          <p>2. Familiar with Git commands such as rebase and cherry-pick, and understand CI and CD processes</p>
          <p>3. Familiar with Jest unit testing framework, familiar with various testing techniques</p>
        </li>
      </ul>
    </>
  );
}
