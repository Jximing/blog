---
title: Linux记录
date: 2020-04-15 14:37:08
categories:
  - [Java]
  - [操作系统, Linux]
tags: note
---

### manjaro 相关

- 压缩包乱码：

```
sudo pacman -Sy unarchiver
unar -e GBK 人员组织机构对应关系表.zip
```

- 在终端打开文件夹：
  `nautilus .`

- 使用以下命令，生成可用中国镜像站列表：
  `sudo pacman-mirrors -i -c China -m rank`

- 从远端接受文件:
  `scp root@www.runoob.com:/home/root/others/music /home/space/music/1.mp3`

- 发送文件到远端:

```
scp local_file remote_username@remote_ip:remote_folder
或者
scp local_file remote_username@remote_ip:remote_file
或者
scp local_file remote_ip:remote_folder
或者
scp local_file remote_ip:remote_file
```
