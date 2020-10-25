import "./style.less";

export default function Page(
  props: React.PropsWithChildren<{ className: string }>
) {
  const { className, children } = props;
  return <div className={`page ${className}`}>{children}</div>;
}
