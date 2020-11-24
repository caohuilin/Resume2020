import "./style.less";

export default function Download() {
  const href = `/Huilin-Cao's-Resume-Front-end-Engineer-4-years-2020.pdf`;
  return (
    <div className="download">
      <a href={href} target="_blank">
        Download
      </a>
    </div>
  );
}
