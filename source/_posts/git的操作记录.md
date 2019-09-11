---
title: git的操作记录
tags: git
abbrlink: d5d49586
date: 2019-09-07 08:41:08
---

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

```
git checkout HEAD file/to/restore
```
