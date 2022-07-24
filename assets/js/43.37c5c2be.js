(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{514:function(t,v,a){"use strict";a.r(v);var _=a(20),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("例如线上服务器CPU100%，如何找到相关服务，如何定位问题代码。")]),t._v(" "),a("p",[t._v("服务器上部署了若干tomcat实例，即若干垂直切分的Java站点服务，以及若干Java微服务，突然收到运维的CPU异常告警。")]),t._v(" "),a("p",[t._v("问：如何定位是哪个服务进程导致CPU过载，哪个线程导致CPU过载，哪段代码导致CPU过载？\n")]),t._v(" "),a("h2",{attrs:{id:"找到最耗cpu的进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找到最耗cpu的进程"}},[t._v("#")]),t._v(" 找到最耗CPU的进程")]),t._v(" "),a("ul",[a("li",[t._v("执行top -c ，显示进程运行信息列表")]),t._v(" "),a("li",[t._v("键入P (大写p)，进程按照CPU使用率排序")])]),t._v(" "),a("p",[t._v("例如这里得到的最耗CPU的进程PID为12345")]),t._v(" "),a("h2",{attrs:{id:"找到最耗cpu的线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找到最耗cpu的线程"}},[t._v("#")]),t._v(" 找到最耗CPU的线程")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("top -Hp 12345")]),t._v(" ，显示一个进程的线程运行信息列表")]),t._v(" "),a("li",[t._v("键入P (大写p)，线程按照CPU使用率排序")])]),t._v(" "),a("p",[t._v("例如进程12345内，最耗CPU的线程PID为67890")]),t._v(" "),a("h2",{attrs:{id:"将线程pid转化为16进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将线程pid转化为16进制"}},[t._v("#")]),t._v(" 将线程PID转化为16进制")]),t._v(" "),a("p",[a("code",[t._v('printf "%x\\n" 67890')]),t._v(",得到67890对应的16进制是10932")]),t._v(" "),a("p",[t._v("之所以要转化为16进制，是因为堆栈里，线程id是用16进制表示的。")]),t._v(" "),a("h2",{attrs:{id:"查看堆栈-找到线程在干嘛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看堆栈-找到线程在干嘛"}},[t._v("#")]),t._v(" 查看堆栈，找到线程在干嘛")]),t._v(" "),a("ul",[a("li",[t._v("打印进程堆栈")]),t._v(" "),a("li",[t._v("通过线程id，过滤得到线程堆栈\n"),a("code",[t._v("jstack 12345 | grep '10932' -C5 --color")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);