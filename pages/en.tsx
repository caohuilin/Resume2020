import Head from "next/head";
import Info from "../components/Info/En";
import Education from "../components/Education/En";
import Experience from "../components/Experience/En";
import Page from "../components/Common/Page";
import Skills from "../components/Skills/En";
import Project from "../components/Project/En";
import Download from "../components/Download/En";
import Zh from "./zh";

import "./index.less";

export default function Resume() {
  return (
    <>
      <div className="typo resume">
        <Head>
          <title>Huilin Cao's Resume-Front-end-Engineer-4-years-2020</title>
        </Head>
        <Page className="page-1">
          <div className="left">
            <Info />
            <Experience />
          </div>
          <div className="right">
            <Skills />
            <Education />
          </div>
        </Page>
        <Page className="page-2">
          <Project />
        </Page>
        <Download />
      </div>
      <div>
        <Zh />
      </div>
    </>
  );
}
