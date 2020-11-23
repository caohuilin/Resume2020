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
          <p>1. Proficient in HTML5 and CSS3.</p>
          <p>2. Experience in developing style components with LESS.</p>
          <p>
            3. Worked on modern browsers like Google Chrome. Understand the
            principle of browser.
          </p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>1. Excellent hands on experience in JavaScript.</p>
          <p>2. Implement Front-End features with TypeScript / JavaScript.</p>
          <p>
            3. Stay updated on latest JavaScript practices following TypeScript,
            ESNext.
          </p>
        </li>
        <li>
          <SkillTitle>React / Mobx</SkillTitle>
          <p>1. Worked on React components, Forms, Events, Keys, Router, Animations.</p>
          <p>
            2. Extensive knowledge in developing single - page applications
            (SPAs).
          </p>
          <p>
            3. Experience with modern build tool chains, like JavaScript
            frameworks/technologies such as React, MobX.
          </p>
          <p>4. Extensive working experience with Axios, Lodash, and Next.js.</p>
        </li>
        <li>
          <SkillTitle>Webpack / Rollup / Lerna</SkillTitle>
          <p>
            1. Experience in using Webpack as module bundler and performing the vast majority of the tasks.
          </p>
          <p>2. Experience in Lerna tools that optimizes the workflow around managing multi-package repositories. </p>
        </li>
        <li>
          <SkillTitle>Engineering</SkillTitle>
          <p>
            1. Involved in all the stages of Software Development Life Cycle including Requirements, Analysis and Design, Implementation, Integration and Testing, Deployment and Maintenance.
          </p>
          <p>
            2. Worked on version control tools such as Git, integration tools like Jenkins, bug tracking tools like JIRA.
          </p>
          <p>
            3. Developed the unit testing scripts using Jest for testing the React components using Enzyme and react-test-renderer.
          </p>
        </li>
      </ul>
    </>
  );
}
