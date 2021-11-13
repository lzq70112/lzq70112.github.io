const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "xiongmao's blog",
  description: 'K8S、ELK、Jenkins、DevOps、CI/CD、Python',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
	externalLinks:
	  { target: '_blank', rel: 'nofollow noopener noreferrer' }
  },
  

  head,
  plugins,
  themeConfig,
}
