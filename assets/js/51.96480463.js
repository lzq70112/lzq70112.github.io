(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{522:function(s,t,e){"use strict";e.r(t);var n=e(20),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("reids服务器的6379端口telnet不通\n")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer01 dist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# telnet 192.168.0.1 6379")]),s._v("\nTrying "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ntelnet: connect to address "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1: Connection refused\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("查看reids进程和端口，都是存在的。"),e("strong",[s._v("But")]),s._v("ip地址是127.0.0.1 "),e("strong",[s._v("So")]),s._v("只是本机能使用")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer02"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -ntulp |grep 6379")]),s._v("\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12209")]),s._v("/./redis-serve \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h1",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),e("p",[s._v("编辑配置文件vim */redis.conf")]),s._v(" "),e("blockquote",[e("p",[s._v("bind 0.0.0.0\n最后重启redis服务即可")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer02"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -ntulp |grep 6379")]),s._v("\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:6379            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1892")]),s._v("/./redis-serve \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);