(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{649:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、概念"}},[s._v("#")]),s._v(" 1、概念")]),s._v(" "),t("p",[s._v("ansible中最重要的一个概念-roles")]),s._v(" "),t("p",[s._v("总的来说roles就是把我们前面讲过的东西进行了一个排版，它规定了严格的目录格式，我们必须按照目录结构和文件名进行创建，否则它的文件系统就加载不")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/ru5erkjggg==.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"_2、目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、目录结构"}},[s._v("#")]),s._v(" 2、目录结构")]),s._v(" "),t("p",[t("code",[s._v("mkdir -p {vars,tasks,templates,handles,files,meta}")]),s._v(" #快速创建目录结构")]),s._v(" "),t("ul",[t("li",[s._v("mysql.yml：playbook文件")]),s._v(" "),t("li",[s._v("mysql：roles目录，也是角色名")]),s._v(" "),t("li",[s._v("files：存放文件、压缩包、安装包等")]),s._v(" "),t("li",[s._v("handlers：触发任务放在这里")]),s._v(" "),t("li",[s._v("tasks：具体任务")]),s._v(" "),t("li",[s._v("templates：存放通过template渲染的模板文件")]),s._v(" "),t("li",[s._v("vars：定义变量")]),s._v(" "),t("li",[s._v("meta：任务依赖关系")])]),s._v(" "),t("p",[s._v("那些main.yml也是必须的，名字必须是这样，目录名称也必须相同，")]),s._v(" "),t("h2",{attrs:{id:"_3、nginx示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、nginx示例"}},[s._v("#")]),s._v(" 3、nginx示例")]),s._v(" "),t("p",[s._v("但是不是每个目录都是必须的，下面我们把httpd的那个例子用roles写一下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" install httpd server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("yum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" name=httpd state=present\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" install\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" configure httpd server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" src=httpd.conf dest=/etc/httpd/conf/httpd.conf\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("notify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 条用名称为Restart Httpd Server的handlers，可以写多个")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Restart Httpd Server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" configure\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service httpd server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" name=httpd state=started enabled=yes\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" start\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("handlers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Restart Httpd Server\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" name=httpd state=restarted\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("就把上面这一段改成roles的格式，目录结构如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/image-20210926210402065.png",alt:"image-20210926210402065"}})]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx/vars/main.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("packet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx/handlers/main.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Restart Httpd Server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" restarted\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx/tasks/config.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" configure httpd server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx.conf\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要去templates去找文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/nginx/nginx.conf\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("notify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Restart Httpd Server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" configure\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx/tasks/install.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" install httpd server\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" present\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx/tasks/start.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" packet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" started\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简单测试变量")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" started\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yes\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx/tasks/main.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include_tasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" install.yml\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include_tasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config.yml\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include_tasks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" start.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx.yml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("roles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("role")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - nginx 与上面是等价的，但是上面的可以增加tags")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_4、galaxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、galaxy"}},[s._v("#")]),s._v(" 4、Galaxy")]),s._v(" "),t("p",[s._v("官方网站："),t("a",{attrs:{href:"https://galaxy.ansible.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Galaxy"),t("OutboundLink")],1),s._v("\n它上面是别人写好的roles，比如你想要安装Nginx，那么在上面搜索nginx")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ansible-galaxy "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" geerlingguy.nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行以后，会把它下载到")]),s._v(" "),t("p",[t("code",[s._v("ls /root/.ansible/roles")]),s._v(" # 这个目录下")])])}),[],!1,null,null,null);a.default=e.exports}}]);