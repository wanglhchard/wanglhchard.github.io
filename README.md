# chard.github.io

[![GitHub release](https://img.shields.io/github/v/release/alshedivat/al-folio)](https://github.com/alshedivat/al-folio/releases/latest)
[![GitHub license](https://img.shields.io/github/license/alshedivat/al-folio?color=blue)](https://github.com/alshedivat/al-folio/blob/main/LICENSE)

</div>

个人网站，基于Jekyll和al-folio主题构建

## 项目配置

### 基本信息

- 姓名: Wang L. Richie
- 网站标题: blank (默认使用全名)
- 语言: 中英文双语(en)
- URL: <https://wanglhchard.github.io>

### 博客设置

- 博客名称: 博客日记
- 博客描述: 日常 | 分享 | 记录生活
- 永久链接格式: /blog/:year/:title/

### 技术栈

- 静态网站生成器: Jekyll
- 主题: al-folio
- 语法高亮: Rouge
- Markdown处理器: kramdown

## 特色功能

### 已启用插件

- 响应式图片(imagemagick)
- 学术出版物展示(jekyll/scholar)
- Mermaid图表支持
- 暗黑模式
- 数学公式支持(MathJax)

### 数据可视化

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <!-- 引入TailwindCSS、Font Awesome和Framer Motion -->
</head>
<body class="bg-black text-white">
  <!-- Bento Grid布局 -->
  <div class="bento-grid">
    <!-- 超大数字展示区 -->
    <div class="text-9xl font-bold">100%</div>
    
    <!-- 数据可视化区 -->
    <svg class="w-full h-64">
      <polyline points="50,180 150,120 250,140 350,80 450,100 550,60" 
                stroke="#38b2ac" stroke-width="4"/>
    </svg>
  </div>
</body>
</html>
```

## 部署说明

1. 安装依赖:

  ```bash
  bundle install
  ```

2. 本地运行:

  ```bash
  bundle exec jekyll serve
  ```

3. 构建静态文件:

  ```bash
  bundle exec jekyll build
  ```

## 自定义配置

编辑`_config.yml`文件可修改:

- 网站基本信息
- 插件启用状态
- 显示标签和分类
- 分析工具配置
