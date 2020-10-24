import "./style.less";

export enum ETitleType {
  Default = "default",
  Theme = "theme",
}
export default function Title(
  props: React.PropsWithChildren<{ type?: ETitleType }>
) {
  const { type = ETitleType.Default, children } = props;
  return (
    <h4 className={type === ETitleType.Theme ? "theme-title" : "title"}>
      {children}
    </h4>
  );
}
