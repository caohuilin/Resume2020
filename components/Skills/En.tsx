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
          <SkillTitle>HTML / CSS</SkillTitle>
          <p>1. Capable of writing semantic HTML, modulized CSS.</p>
          <p>
            2. Capable of constructing complex layout using Flexbox and complex
            animation using CSS3.
          </p>
          <p>3. Capable of effectively writing CSS using LESS.</p>
          <p>
            4. Understanding DOM loading and rendering mechanism in modern
            browsers like Google Chrome.
          </p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>1. Familiar with TypeScript and its tool in CI/CD process.</p>
          <p>2. Understanding advanced type in TypeScript.</p>
          {/* <p>3. Understanding fundamental concept of JavaScript.</p> */}
          {/* <p>4. Skilled in ESNext.</p> */}
        </li>
        <li>
          <SkillTitle>React / Mobx</SkillTitle>
          <p>
            1. Capable of constructing single-page application using React and
            Mobx.
          </p>
          <p>2. Skilled in using React Hooks.</p>
        </li>
        <li>
          <SkillTitle>Webpack / Rollup / Lerna</SkillTitle>
          <p>
            1. Capable of packing project using Webpack and understanding its
            principle.
          </p>
          <p>2. Capable of optimizing Webpack packing performance.</p>
          <p>3. Understanding the process and mechanism of Rollup.</p>
          <p>
            3. Understanding Lerna, a tool managing multi-package repositories
            with git and npm.
          </p>
        </li>
        <li>
          <SkillTitle>Engineering</SkillTitle>
          <p>
            1. Experienced in all the stages of Software Development Life Cycle
            including Requirements, Analysis and Design, Implementation,
            Integration and Testing, Deployment, and Maintenance.
          </p>
          <p>
            2. Familiar with version control tools such as Git, integration
            tools like Jenkins, bug tracking tools like JIRA.
          </p>
          <p>3. Skilled in using Jest and all sorts of testing technics.</p>
        </li>
      </ul>
    </>
  );
}
