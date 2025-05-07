// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-集锦",
          title: "集锦",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/highlights/";
          },
        },{id: "post-mermaid图表使用指南",
        
          title: "Mermaid图表使用指南",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mermaid-example/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-青海旅游专题",
          title: '青海旅游专题',
          description: "青海湖及其周边地区的旅游资源和行程规划展示项目，包含多种交互式展示形式，适合不同场景使用。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E9%9D%92%E6%B5%B7%E6%97%85%E6%B8%B8/%E9%9D%92%E6%B5%B7%E6%97%85%E6%B8%B8%E4%B8%93%E9%A2%98/";
            },},{id: "projects-青海湖环线-极致体验之旅-新版",
          title: '青海湖环线 | 极致体验之旅(新版)',
          description: "7天360°环青海湖深度游，包含12个核心景点，茶卡盐湖、翡翠湖、雅丹魔鬼城等绝美风光",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E9%9D%92%E6%B5%B7%E6%97%85%E6%B8%B8/%E9%9D%92%E6%B5%B7%E6%B9%96%E6%97%85%E6%B8%B8%E5%B9%BF%E5%91%8A%E7%89%88/";
            },},{id: "projects-琵琶行",
          title: '琵琶行',
          description: "白居易最著名的乐府诗之一，描写琵琶女凄凉身世与动人琴声。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E7%99%BD%E5%B1%85%E6%98%93%E8%AF%97%E8%AF%8D/%E7%90%B5%E7%90%B6%E8%A1%8C/";
            },},{id: "projects-白居易诗词专题",
          title: '白居易诗词专题',
          description: "中唐诗人白居易的经典诗词作品集锦，展示其平易近人的创作风格与深刻的社会关怀。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E7%99%BD%E5%B1%85%E6%98%93%E8%AF%97%E8%AF%8D/%E7%99%BD%E5%B1%85%E6%98%93%E8%AF%97%E8%AF%8D/";
            },},{id: "projects-钱塘湖春行",
          title: '钱塘湖春行',
          description: "白居易著名的山水诗之一，描绘杭州西湖春日美景。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E7%99%BD%E5%B1%85%E6%98%93%E8%AF%97%E8%AF%8D/%E9%92%B1%E5%A1%98%E6%B9%96%E6%98%A5%E8%A1%8C/";
            },},{id: "projects-长恨歌",
          title: '长恨歌',
          description: "白居易最著名的叙事长诗之一，描述唐玄宗与杨贵妃的爱情悲剧。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E7%99%BD%E5%B1%85%E6%98%93%E8%AF%97%E8%AF%8D/%E9%95%BF%E6%81%A8%E6%AD%8C/";
            },},{id: "projects-李白诗词专题",
          title: '李白诗词专题',
          description: "盛唐诗人李白的经典诗词作品集锦，展示其豪放不羁的创作风格与浪漫主义情怀。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E6%9D%8E%E7%99%BD%E8%AF%97%E8%AF%8D/%E6%9D%8E%E7%99%BD%E8%AF%97%E8%AF%8D/";
            },},{id: "projects-静夜思",
          title: '静夜思',
          description: "李白脍炙人口的思乡名作，表达了客居他乡的游子在月夜的思乡之情。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E6%9D%8E%E7%99%BD%E8%AF%97%E8%AF%8D/%E9%9D%99%E5%A4%9C%E6%80%9D/";
            },},{id: "projects-青海湖环线卡片",
          title: '青海湖环线卡片',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E9%9D%92%E6%B5%B7%E6%97%85%E6%B8%B8/%E9%9D%92%E6%B5%B7%E6%B9%96%E7%8E%AF%E7%BA%BF%E5%8D%A1%E7%89%87%E7%89%88/";
            },},{id: "projects-青海湖环线-科技感动态广告",
          title: '青海湖环线 | 科技感动态广告',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E9%9D%92%E6%B5%B7%E6%97%85%E6%B8%B8/%E9%9D%92%E6%B5%B7%E6%B9%96%E7%8E%AF%E7%BA%BF%E5%B9%BF%E5%91%8A%E7%89%88/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
