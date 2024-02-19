import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "MSL | 使用文档",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    "/eula",
  ],
});
