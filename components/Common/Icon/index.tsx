import './style.less'

export enum EIconType {
  Github = "github",
  WeiChat = "weichat",
  Info = "info",
  Flag = "flag",
  Phone = "phone",
  Email = "Email",
  Website = "website",
  Education = "education",
}

const IconMap = {
  [EIconType.Github]: <i className="iconfont">&#xee2b;</i>,
  [EIconType.WeiChat]: <i className="iconfont">&#xe613;</i>,
  [EIconType.Info]: <i className="iconfont">&#xe609;</i>,
  [EIconType.Flag]: <i className="iconfont">&#xe608;</i>,
  [EIconType.Phone]: <i className="iconfont">&#xe686;</i>,
  [EIconType.Email]: <i className="iconfont">&#xea9c;</i>,
  [EIconType.Website]: <i className="iconfont">&#xe8be;</i>,
  [EIconType.Education]: <i className="iconfont">&#xe61e;</i>,
};

export default function Icon({ type }: { type: EIconType }) {
  return IconMap[type]
}
