---
title: git的操作记录
tags: git
abbrlink: d5d49586
date: 2019-09-07 08:41:08
---

### 与服务器上的代码产生冲突

如果系统中有一些配置文件在服务器上做了配置修改,然后后续开发又新添加一些配置项的时候，在发布这个配置文件的时候,会发生代码冲突:
{% note danger %}
error: Your local changes to the following files would be overwritten by merge:
protected/config/main.php
Please, commit your changes or stash them before you can merge.
{% endnote %}

如果希望保留生产服务器上所做的改动,仅仅并入新配置项, 处理方法如下:

```
git stash
git pull
git stash pop
```

然后可以使用 `git diff -w +文件名`来确认代码自动合并的情况.

反过来,如果希望用代码库中的文件完全覆盖本地工作版本. 方法如下:

```
git reset --hard
git pull
```

其中 `git reset` 是针对版本,如果想针对文件回退本地修改,使用

```bash
git checkout HEAD file/to/restore
```

### 辛辛苦苦加班一星期敲的代码没了

过程是这样的，在终端输入 git log，列出所有的 commit 信息，如下图：

![1568253175476](git%E7%9A%84%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95/1568253175476.png)

commit 的信息很简单，就是做了 6 个功能，每个功能对应一个 commit 的提交，分别是 feature-1 到 feature-6。

接下来执行了强制回滚，如下：

```bash
git reset --hard 2216d4e
```

回滚到了 feature-1 上，并且回滚的时候加了--hard，导致之前 feature-2 到 feature-6 的所有代码全部弄丢了，现在 git log 的显示如下：

![1568253317626](git%E7%9A%84%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95/1568253317626.png)

现在 feature-2 到 feature-6 的代码没了。。。。。

然鹅还没完，在这个基础上新添加了一个 commit 提交，信息叫 feature-7，如下图：

![1568253390009](git%E7%9A%84%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95/1568253390009.png)

现在 feature-2 到 feature-6 全没了，还多了一个 feature-7

{%note danger%}

请问 如何把丢失的代码 feature-2 到 feature-6 全部恢复回来，并且 feature-7 的代码也要保留

{%endnote%}
