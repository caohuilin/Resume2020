import Head from "next/head";
import Info from "../components/Info";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Page from "../components/Common/Page";
import Skills from "../components/Skills";
import Project1 from "../components/Project/Project1";
import Project2 from "../components/Project/Project2";
import Download from "../components/Download";

import "./index.less";

export default function Resume(props: { showDownload?: boolean }) {
  const { showDownload = true } = props;
  return (
    <div className="typo resume">
      <Head>
        <title>曹慧琳简历-前端工程师-4年-2020</title>
      </Head>
      <Page className="page-1">
        <div className="left">
          <Info />
          <Experience />
          <Education />
        </div>
        <div className="right">
          <Skills />
          <Project1 />
        </div>
      </Page>
      <Page className="page-2">
        <Project2 />
      </Page>
      {showDownload && <Download />}
      <div className="version">version: v2020.12.01</div>
    </div>
  );
}
