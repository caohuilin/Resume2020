import "./style.less";

export default function SmallTitle(
  props: React.PropsWithChildren<{}>
) {
  const { children } = props;
  return (
    <h6 className="small-title">
      {children}
    </h6>
  );
}
