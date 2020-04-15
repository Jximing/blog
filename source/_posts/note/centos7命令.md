---
title: centos7命令
date: 2020-04-15 14:51:39
categories:
  - [操作系统, Linux]
tags: note
---

### 防火墙
- 查看防火墙状态
    - firewall-cmd --state
- 开启防火墙
    - systemctl start firewalld.service
- 设置开机自启
    - systemctl enable firewalld.service
- 重启防火墙
    - systemctl restart firewalld.service
- 开启特定端口
    - firewall-cmd --zone=public --add-port=80/tcp --permanent 
        - zone #作用域
        - --add-port=80/tcp  #添加端口，格式为：端口/通讯协议
        - --permanent   #永久生效，没有此参数重启后失效