---
layout: post
title: "Mermaid图表使用指南"
date: 2025-04-01
categories: tutorial
mermaid:
  enabled: true
  zoomable: true
toc:
  sidebar: left
  toc_number: true
tags: Mermaid
---

## 如何在Markdown中使用Mermaid图表

al-folio主题原生支持Mermaid图表，您只需在Markdown文件中使用代码块并指定语言为mermaid即可。

### 基本语法

````markdown
```mermaid
图表类型
    图表内容
```
````

### 流程图示例

````markdown
```mermaid
graph LR
    A[开始] --> B{条件判断}
    B -->|是| C[执行操作1]
    B -->|否| D[执行操作2]
    C --> E[结束]
    D --> E
```
````

```mermaid
graph LR
    A[开始] --> B{条件判断}
    B -->|是| C[执行操作1]
    B -->|否| D[执行操作2]
    C --> E[结束]
    D --> E
```


````markdown
```mermaid
sequenceDiagram
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
```
````

```mermaid
sequenceDiagram
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
```

### 序列图示例

````markdown
```mermaid
sequenceDiagram
    participant 用户
    participant 系统
    用户->>系统: 登录请求
    系统-->>用户: 登录成功
```
````

```mermaid
sequenceDiagram
    participant 用户
    participant 系统
    用户->>系统: 登录请求
    系统-->>用户: 登录成功
```

### 类图示例

````markdown
```mermaid
classDiagram
    class 用户 {
        +String 姓名
        +Int 年龄
        +登录()
    }
    class 系统 {
        +验证()
    }
    用户 --> 系统
```
````

```mermaid
classDiagram
    class 用户 {
        +String 姓名
        +Int 年龄
        +登录()
    }
    class 系统 {
        +验证()
    }
    用户 --> 系统
```

### 甘特图示例

````markdown
```mermaid
gantt
    title 项目计划
    dateFormat  YYYY-MM-DD
    section 开发
    需求分析      :done,    des1, 2025-01-01,2025-01-05
    系统设计      :active,  des2, 2025-01-06, 3d
    编码实现      :         des3, after des2, 5d
```
````

```mermaid
gantt
    title 项目计划
    dateFormat  YYYY-MM-DD
    section 开发
    需求分析      :done,    des1, 2025-01-01,2025-01-05
    系统设计      :active,  des2, 2025-01-06, 3d
    编码实现      :         des3, after des2, 5d
```

### 饼图示例

````markdown
```mermaid
pie
    title 浏览器市场份额
    "Chrome" : 65.0
    "Safari" : 15.8
    "Firefox" : 10.2
    "其他" : 9.0
```
````

```mermaid
pie
    title 浏览器市场份额
    "Chrome" : 65.0
    "Safari" : 15.8
    "Firefox" : 10.2
    "其他" : 9.0
```

## 最佳实践

1. 保持图表简洁，避免过于复杂
2. 为图表添加适当的标题说明
3. 测试图表在不同设备上的显示效果
4. 使用al-folio默认的配色方案保持风格统一

更多Mermaid语法请参考[官方文档](https://mermaid.js.org/)