// ==========================================
//  个人网站配置文件
//  只需要修改这个文件即可更新网站内容！
//  修改后保存，刷新浏览器即可看到效果
// ==========================================

const CONFIG = {
  // ---- 基本信息 ----
  name: "Hua Liang",
  title: "热爱生活，热爱编程",
  bio: "你好！我是Hua Liang，一名热爱技术的开发者。我喜欢用代码创造有趣的东西，也喜欢分享知识。工作之余，我喜欢阅读、旅行和摄影。欢迎来到我的个人主页！",

  // 头像图片路径（把你的头像图片放到 assets 文件夹里，然后改这里的文件名）
  avatar: "assets/avatar.png",

  // ---- 技能标签 ----
  skills: ["Python", "JavaScript", "数据分析", "机器学习", "写作", "摄影"],

  // ---- 社交链接 ----
  // 不需要的链接留空 "" 即可，不会显示
  social: {
    github: "https://github.com/",
    email: "mailto:hello@example.com",
    twitter: "",
    wechat: "",
    bilibili: "",
    zhihu: ""
  },

  // ---- 作品展示 ----
  // 可以添加或删除项目，每个项目有标题、描述、图片和链接
  projects: [
    {
      title: "AI 图片生成工具",
      description: "基于深度学习的图片生成工具，输入文字描述即可生成对应图片。",
      image: "",
      link: "https://github.com/"
    },
    {
      title: "个人博客系统",
      description: "一个轻量级的静态博客系统，支持 Markdown 写作和自动部署。",
      image: "",
      link: "https://github.com/"
    },
    {
      title: "数据分析看板",
      description: "实时数据可视化看板，支持多种图表类型和数据源接入。",
      image: "",
      link: "https://github.com/"
    }
  ],

  // ---- 默认模板 ----
  // 可选值: "theme-minimal" | "theme-blue" | "theme-orange" | "theme-green"
  defaultTheme: "theme-blue",

  // ---- 网站信息 ----
  siteTitle: "Hua Liang的个人主页",
  footerText: "© 2026 Hua Liang | Powered by GitHub Pages"
};