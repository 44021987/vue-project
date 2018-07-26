export const getTabTile = (tab) => {
  let str = "";
  switch (tab) {
    case "all":
      str = "全部";
      break;
    case "top":
      str = "顶置";
      break;
    case "good":
      str = "精华";
      break;
    case "ask":
      str = "问答";
      break;
    case "share":
      str = "分享";
      break;
    case "job":
      str = "招聘";
      break;
    case "about":
      str = "关于";
      break;
    default:
      str = "其他";
      break;
  }
  return str;
}
