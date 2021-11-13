// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '运维',
    link: '/Operation/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'linux运维',
        items: [
          { text: 'nginx', link: '/note/nginx/' },
          { text: 'docker', link: '/note/docker/' },
          { text: 'elk', link: '/note/elk/' },
          { text: 'jenkins', link: '/note/jenkins/' },
          { text: 'jumpserver', link: '/note/jumpserver/' },
          { text: 'K8S', link: '/note/K8S/' },
          { text: 'linux系统', link: '/note/linux/' },
          { text: 'mysql', link: '/note/mysql/' },
          { text: 'ceph', link: '/note/ceph/' },
          { text: 'Prometheus', link: '/note/Prometheus/' },
          { text: 'redis', link: '/note/redis/' },
          { text: 'tomcat', link: '/note/tomcat/' },
          { text: 'zabbix', link: '/note/zabbix/' },
		  { text: 'zookeeper', link: '/note/zookeeper/' },
		  { text: 'KVM', link: '/note/KVM/' },
		  { text: 'ansible', link: '/note/ansible/' },
        ],
      },
      {
        text: '网络运维',
        items: [
          { text: 'CCIE', link: '/note/网络知识/' },
        ],
      },
    ],
  },
  {
    text: '开发',
    link: '/Develop/',
    items: [
      { text: 'python', link: '/note/python/' },
      { text: 'shell', link: '/note/shell/' },
    ],
  },
  { text: '踩坑', link: '/more/' },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
      { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
	  { text: '葵花宝典', link: '/pages/beb6c0bd8a66cea61/' },

    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '友情链接', link: '/friends/' },
  { text: '关于', link: '/about/' },
  { text: '镜像', link: 'http://m.eryajf.net' },
]
