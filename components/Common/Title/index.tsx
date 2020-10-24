import "./style.less";

export default function Title(props: React.PropsWithChildren<{}>) {
  return <h4 className="title">{props.children}</h4>;
}
