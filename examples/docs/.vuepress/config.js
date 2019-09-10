module.exports = {
  title: 'Smart-UI', // 设置网站标题
  dest: './dist', // 设置输出目录
  description: 'UI components', // 网站的描述
  base: '/smart-ui/', // 设置站点根路径
  repo: 'https://github.com/seg-fe/smart-ui', // 添加 github 链接
  // port: 2233, //端口
  // head: [
  //   ['link', {
  //     rel: 'icon',
  //     href: './logo.png'
  //   }]
  // ],
  themeConfig: {
    // 添加导航栏
    nav: [{
        text: '指南',
        link: '/'
      },
      {
        text: '组件',
        link: '/base/'
      },
      // {
      //   text: 'js',
      //   link: '/zhihu/'
      // },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [{
            text: 'smart-ui',
            link: 'https://github.com/SEG-FE/smart-ui'
          },
          {
            text: 'hwl-fe',
            link: 'https://github.com/hwl-fe'
          },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/base/': [{
        title: 'Notice',
        collapsable: false,
        children: [
          'alert'
        ]
      }]
    }
  },
  markdown: {
    config: md => {
      debugger;
      md.use(require('markdown-it-container'), 'demo', {
        validate(params) {
          debugger
          return params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens, idx) {
          debugger
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            const description = m && m.length > 1 ? m[1] : '';
            const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
            return `<demo-block>
            ${description ? `<div>${md.render(description)}</div>` : ''}
            <!--element-demo: ${content}:element-demo-->
            `;
          }
          return '</demo-block>';
        }
      })
    }
  }
}