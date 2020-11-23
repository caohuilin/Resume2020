import "./style.less";

export default function Download(props: { language: string }) {
  const href =
    props.language === "en"
      ? `/Huilin-Cao's-Resume-Front-end-Engineer-4-years-2020.pdf`
      : "/曹慧琳简历-前端工程师-4年-2020.pdf";
  return (
    <div className="download">
      <a href={href} target="_blank">
        PDF 下载
      </a>
    </div>
  );
}
