---
title: 使用Hexo + NexT 快速搭建博客
categories: hexo
tags:
  - Hexo
  - NexT

mathjax: false
comments: true
abbrlink: eba3f111
date: 2019-09-07 15:34:54
---

{% asset_img pic1.png %}

<!--more-->

# 安装 Hexo

## 安装 node.js

{% note success %}
如果你已经安装了 node.js，请忽略。
{% endnote %}

访问[node.js 官网](https://nodejs.org/en/)，根据指引进行安装。

## 安装 Git

{% note success %}
如果你已经安装了 Git，请忽略。
{% endnote %}

访问[Git 官网](https://git-scm.com/)，根据指引进行安装。

{% note warning %}
由于众所周知的原因，Windows 从上面的链接下载 git for windows 最好挂上一个代理，否则下载速度十分缓慢。也可以参考[这个页面](https://github.com/waylau/git-for-win)，收录了存储于百度云的下载地址。
{% endnote %}

## 安装 Hexo

- **国内的朋友**，因为众所周知的原因，从 npm 直接安装 hexo 会非常慢，所以你需要用到[**镜像源**](https://npm.taobao.org/)，参考上面的步骤，使用 cnpm 命令行工具代替默认的 npm: 在 windows 控制台（cmd）里输入并执行`npm install -g cnpm --registry=https://registry.npm.taobao.org`，然后安装 hexo: `cnpm install -g hexo-cli`

- **国外的朋友**，请直接打开 windows 控制台，输入`npm install -g hexo-cli`并执行。

---

# 建站

## 建立本地博客文件夹

在命令行执行如下命令，其中`<folder>`为文件夹路径

```bash
hexo init <folder>
cd <folder>
```

{% note warning %}
**所有有关`hexo`的命令** 均要在`<folder>`路径下执行。
{% endnote %}

建立好后文件夹目录如下

```nohighlight
.
├── _config.yml
├── package.json
├── .gitignore
├── node_modules
├── scaffolds
├── source
|   ├── _posts
└── themes
```

其中

- `_config.yml`：站点的配置文件，可以在此配置大部分的参数。

- `package.json`：应用程序的信息。EJS, Stylus 和 Markdown renderer 已默认安装，您可以自由移除。

  ```json
  {
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
  "version": "3.9.0"
  },
  "dependencies": {
  "version": "3.9.0"
  "hexo-generator-archive": "^0.1.5",
  "hexo-generator-category": "^0.1.3",
  "hexo-generator-index": "^0.2.1",
  "hexo-generator-tag": "^0.2.0",
  "hexo-renderer-ejs": "^0.3.1",
  "hexo-renderer-stylus": "^0.3.3",
  "hexo-renderer-marked": "^1.0.1",
  "hexo-server": "^0.3.3"
  }
  ```

- scaffolds：模板文件夹，当您新建文章时，Hexo 会根据 scaffold 来建立文件。

- source：资源文件夹，存放用户资源的地方。除`_posts`文件夹之外，开头命名为 \_ (下划线)的文件/文件夹和隐藏的文件将会被忽略。Markdown 和 HTML 文件会被解析并放到 public 文件夹，而其他文件会被拷贝过去。

- themes：主题文件夹。Hexo 会根据主题来生成静态页面。

- node_modules：node.js 模块，一些 **插件** 和 **依赖** 会被安装到这里。

{% note info %}
更加详细的解释请参考[hexo 官方文档](https://hexo.io/zh-cn/docs/)
{% endnote %}

### 安装 NexT 主题

进入本地博客文件夹并将 NexT 主题`clone`至`themes`文件夹下

```bash
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

你会看到，在`next`下也有一个`_config.yml`的文件，这是 **NexT 主题的配置文件**，为了区别它和 **博客配置文件**，下面会用带路径的文件名来描述它们：

- `<folder>/_config.yml`：站点配置文件
- `next/_config.yml`：主题配置文件

## 启用 NexT 主题

在`<folder>/_config.yml`里`theme:`选项填`next`，=>`theme: next`，注意冒号后空一格。

到这里，建站的任务就完成了。你现在可以打开控制台，输入并执行如下命令：

```bash
hexo g
```

完成没有报错之后执行如下命令：

```bash
hexo s
```

其中

- `hexo g`：新建`public`文件夹，并在其中生成网站静态文件（html，css，等文件）
- `hexo s`：启动 hexo 服务器，默认情况下，访问网址为：`http://localhost:4000/`

{% note info %}
更多有关 hexo 的命令，请参考[hexo 官方文档](https://hexo.io/zh-cn/docs/)的[命令](https://hexo.io/zh-cn/docs/commands.html)部分。
{% endnote %}

你最后会看到控制台有如下输出：

```bash
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```

在浏览器地址栏输入`http://localhost:4000/`并访问，你应该会看到如下页面：
{% asset_img pic2.png %}

{% note success %}
<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;**恭喜你！你已经完成了博客搭建的主要工作！接下来就是细节的配置了。请耐心阅读以下内容。**
{% endnote %}

[使用hexo下next主题时一些配置](/source/2b624375.html)

---
