const {
  stripScript,
  stripTemplate
} = require('./md-demo.js');
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
    lastUpdated: '上次更新时间',
    // 添加导航栏
    nav: [{
        text: '指南',
        link: '/'
      },
      {
        text: '组件',
        link: '/base/'
      },
      {
        text: '文档',
        link: '/other/'
      },
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
          'alert',
          'tab-list'
        ]
      }],
      '/other/': [
        'new'
      ]
    }
  },
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',
    // NProgress
    '@vuepress/nprogress',
    // search
    ['@vuepress/search', {
      searchMaxSuggestions: 10 //设置搜索的最大结果数。
    }],
    // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/active-header-links',
    // 图片放大
    '@vuepress/medium-zoom'
  ],
  markdown: {
    // markdown-it-anchor 的选项
    anchor: {
      permalink: false
    },
    // markdown-it-toc 的选项
    toc: {
      includeLevel: [1, 2]
    },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-container'), 'demo', {

        validate: function (params) {
          return params.trim().match(/^demo\s+(.*)$/);
        },

        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // 1.获取第一行的内容使用markdown渲染html作为组件的描述
            let demoInfo = tokens[idx].info
              .trim()
              .match(/^demo\s+(.*)$/);
            let description =
              demoInfo && demoInfo.length > 1 ?
              demoInfo[1] :
              '';
            let descriptionHTML = description ?
              md.render(description) :
              '';
            // 2.获取代码块内的html和js代码
            let content = tokens[idx + 1].content;
            // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
            return `<demo-block>
          <template class="source" slot="source">${stripTemplate(content)}</template>
          ${descriptionHTML.html}
          <template class="highlight" slot="highlight">`;
          } else {
            return `</template></demo-block>\n`;
          }
        }
      });
    }
  }
}