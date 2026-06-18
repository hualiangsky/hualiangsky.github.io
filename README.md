# 个人网站 - 零代码建站

这是一个不需要编程知识就能使用的个人网站模板。只需修改 `config.js` 配置文件，就能拥有自己的个人主页。支持 4 套主题模板一键切换。

---

## 第一步：修改网站内容

### 1. 修改配置文件

用记事本（或任何文本编辑器）打开 `config.js` 文件，按照里面的注释修改内容：

```javascript
const CONFIG = {
  name: "你的名字",           // ← 改成你的名字
  title: "一句话介绍自己",     // ← 改成你的介绍
  bio: "详细的自我介绍...",    // ← 改成你的自我介绍
  avatar: "assets/avatar.png", // ← 放一张头像图片
  skills: ["技能1", "技能2"], // ← 改成你的技能
  // ... 更多配置见文件内注释
};
```

### 2. 替换头像

把你的头像图片放到 `assets` 文件夹里，然后在 `config.js` 中修改 `avatar` 路径。支持 `.png`、`.jpg` 等格式。

### 3. 切换模板

网站内置 4 套模板：
- **极简白** - 白色背景，专业简洁
- **深邃蓝** - 深色科技风
- **温暖橙** - 暖色调，亲切友好
- **自然绿** - 绿色自然风

有两种方式切换模板：
- 方式一：修改 `config.js` 中的 `defaultTheme` 值
- 方式二：在网页上点击右下角的彩色圆点直接切换

### 4. 本地预览

双击 `index.html` 文件，用浏览器打开即可预览效果。

---

## 第二步：上传到 GitHub

### 准备工作

1. 注册 GitHub 账号：打开 [github.com](https://github.com)，点击 "Sign up" 注册
2. 注册完成后登录

### 方法一：通过网页上传（推荐，最简单）

1. 登录 GitHub 后，点击右上角的 **"+"** 号 → 选择 **"New repository"**
2. 仓库名称填写：`你的用户名.github.io`（注意：用户名必须和你的 GitHub 用户名完全一致）
   - 例如：你的用户名是 `zhangsan`，就填 `zhangsan.github.io`
3. 选择 **"Public"**（公开），点击 **"Create repository"**
4. 创建成功后，点击页面上的 **"uploading an existing file"** 链接
5. 把以下文件/文件夹**拖拽**到上传区域：
   - `index.html`
   - `config.js`
   - `themes` 文件夹（整个文件夹）
   - `assets` 文件夹（整个文件夹）
6. 在页面底部点击 **"Commit changes"**（绿色按钮）

### 方法二：通过 GitHub Desktop 上传（适合后续频繁更新）

1. 下载安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的 GitHub 账号
3. 点击 **"Add"** → **"Add Existing Repository"** → 选择你的网站文件夹
4. 点击 **"Create a Repository"**，名称填 `你的用户名.github.io`
5. 点击 **"Publish repository"** 上传到 GitHub

---

## 第三步：开启 GitHub Pages

1. 进入你的仓库页面（网址是 `github.com/你的用户名/你的用户名.github.io`）
2. 点击仓库顶部的 **"Settings"** 选项卡
3. 在左侧菜单点击 **"Pages"**
4. 在 "Branch" 下拉菜单中选择 **"main"**（或 "master"），文件夹选 **"/ (root)"**
5. 点击 **"Save"** 按钮
6. 等待 1-2 分钟，页面刷新后会显示：
   > Your site is live at `https://你的用户名.github.io`

7. 点击那个链接，你的网站就上线了！

---

## 第四步：后续修改网站

1. 修改 `config.js` 文件
2. 上传到 GitHub（替换旧文件）
3. 等待 1-2 分钟，刷新网站即可看到更新

---

## 常见问题

**Q: 网站打不开？**
- 检查仓库名称是否完全等于 `你的用户名.github.io`
- 检查 Settings → Pages 是否已开启
- 上传后等待 1-2 分钟再试

**Q: 怎么修改模板？**
- 方式一：修改 `config.js` 中 `defaultTheme` 为 `"theme-blue"` / `"theme-orange"` / `"theme-green"` / `"theme-minimal"`
- 方式二：直接在网页上点击右下角的彩色圆点

**Q: 能不能用自己的域名？**
- 可以，在 Settings → Pages → Custom domain 中填入你的域名，并按照提示配置 DNS

---

## 文件结构说明

```
├── index.html       ← 主页面（不要修改）
├── config.js        ← 配置文件（修改这个！）
├── themes/          ← 主题文件夹
│   ├── theme-minimal.css  ← 极简白
│   ├── theme-blue.css     ← 深邃蓝
│   ├── theme-orange.css   ← 温暖橙
│   └── theme-green.css    ← 自然绿
└── assets/          ← 放图片等资源
    └── avatar.png   ← 你的头像
```