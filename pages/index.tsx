import Head from "next/head";
import Download from "../components/Download";
import Zh from "./zh";

import "./index.less";

export default function Resume() {
  return (
    <div className="typo resume">
      <Head>
        <title>曹慧琳简历-前端工程师-4年-2020</title>
      </Head>
      <Zh />
      <Download />
      <div className="version">version: v2020.12.01</div>
    </div>
  );
}
