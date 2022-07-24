(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{597:function(s,t,a){"use strict";a.r(t);var r=a(20),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、虚拟化网络分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、虚拟化网络分析"}},[s._v("#")]),s._v(" 1、虚拟化网络分析")]),s._v(" "),a("h3",{attrs:{id:"_1-1-curl-命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-curl-命令详解"}},[s._v("#")]),s._v(" 1.1.curl 命令详解")]),s._v(" "),a("p",[s._v("参考"),a("a",{attrs:{href:"https://www.jianshu.com/p/25746a2f89bc",target:"_blank",rel:"noopener noreferrer"}},[s._v("curl命令详解"),a("OutboundLink")],1),s._v("，例如")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v("  -X POST   --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"text":"germany"}\'')]),s._v("   https://labs.tib.eu/falcon/api?mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("short\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2、-curl-获取-http-各阶段的响应时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、-curl-获取-http-各阶段的响应时间"}},[s._v("#")]),s._v(" 2、 curl 获取 http 各阶段的响应时间")]),s._v(" "),a("p",[s._v("参考"),a("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhqzxsc2006%2Farticle%2Fdetails%2F50547684",target:"_blank",rel:"noopener noreferrer"}},[s._v("通过curl得到http各阶段的响应时间"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("① "),a("strong",[s._v("time_namelookup")]),s._v("：DNS解析时间\n② "),a("strong",[s._v("time_connect")]),s._v("：连接时间，从请求开始到 DNS 解析完毕所用时间。单纯的连接时间=time_connect - time_namelookup\n③ "),a("strong",[s._v("time_appconnect")]),s._v("：建立完成时间，例如 SSL/SSH 等建立连接或者完成三次握手的时间。\n④ "),a("strong",[s._v("time_redirect")]),s._v("：重定向时间，包括最后一次传输前的几次重定向的 DNS 解析、连接、预传输、传输时间。\n⑤ "),a("strong",[s._v("time_pretransfer")]),s._v("： 从开始到准备传输的时间。\n⑥ "),a("strong",[s._v("time_starttransfer")]),s._v("：开始传输时间。在 client 发出请求后，服务端返回数据的第一个字节所用的时间。")])]),s._v(" "),a("p",[s._v("进入业务容器，编辑完获取数据的格式后，执行 curl 命令。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("/dev/null")]),s._v(" 表示空设备，即丢弃一切写入的数据，但显示写入操作成功。")])]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vim")]),s._v(" curl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_namelookup")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_namelookup}")])]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_connect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_connect}")])]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_appconnect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_appconnect}")])]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_redirect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_redirect}")])]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_pretransfer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_pretransfer}")])]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_starttransfer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_starttransfer}")])]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\\n\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_total")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("%{time_total}")])]),s._v("\\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("svc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("grep")]),s._v(" flink\nflink"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jobmanager                          ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".123")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8123")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8124")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8091")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCP")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("d22h\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先使用 ClusterIP 测试接口调用时长")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"@curl-format.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"http://10.96.0.123:8091/jobs/overview"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Total    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Received "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("81865")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("94285")]),s._v("\ntime_namelookup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.004")]),s._v("\ntime_connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\ntime_appconnect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\ntime_redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\ntime_pretransfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\ntime_starttransfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.008")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\ntime_total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.008")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后使用 service name 即域名测试接口调用时长")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"@curl-format.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"http://flink-jobmanager.default.svc.cluster.local:8091/jobs/overview"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Total    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Received "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("164")]),s._v("\ntime_melookup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.516")]),s._v("\ntime_connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.517")]),s._v("\ntime_appconnect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\ntime_redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\ntime_pretransfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.517")]),s._v("\ntime_starttransfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.520")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\ntime_total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.520")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("对比 ClusterIP 和 service name 的接口调用时长，由 "),a("strong",[s._v("time_namelookup")]),s._v(" 可知 DNS 解析时间长。")]),s._v(" "),a("h2",{attrs:{id:"_3、-域名解析分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、-域名解析分析"}},[s._v("#")]),s._v(" 3、 域名解析分析")]),s._v(" "),a("h3",{attrs:{id:"_3-1、外部分析-coredns-解析域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、外部分析-coredns-解析域名"}},[s._v("#")]),s._v(" 3.1、外部分析 - coredns 解析域名")]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" logs coredns-66509f5cf2-km1q4 -nkube-system\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-09-23T01:54:04.590Z "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" plugin/errors: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" flink-jobmanager.default.svc.cluster.local.openstacklocal. A: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" udp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.18:32960-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.79")]),s._v(".1.250:53: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-09-23T01:54:09.592Z "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" plugin/errors: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" flink-jobmanager.default.svc.cluster.local.openstacklocal. A: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" udp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.18:59978-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.79")]),s._v(".1.250:53: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-09-23T01:56:00.609Z "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" plugin/errors: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" flink-jobmanager.default.svc.cluster.local.openstacklocal. AAAA: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" udp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.19:41797-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.79")]),s._v(".1.250:53: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-09-23T01:56:02.610Z "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" plugin/errors: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" flink-jobmanager.default.svc.cluster.local.openstacklocal. AAAA: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" udp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.19:48375-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.79")]),s._v(".1.250:53: i/o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("由 coredns 后台关键日志 "),a("strong",[s._v("A: read udp xxx->xxx: i/o timeout")]),s._v("可知 IPV4 解析超时，"),a("strong",[s._v("AAAA: read udp xxx->xxx: i/o timeout")]),s._v(" 可知 IPV6解析也超时。")]),s._v(" "),a("h3",{attrs:{id:"_3-2、ipv4-和-ipv6-耗时对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、ipv4-和-ipv6-耗时对比"}},[s._v("#")]),s._v(" 3.2、IPV4 和 IPV6 耗时对比")]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IPV4 请求耗时")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@curl-format.txt"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://flink-jobmanager.default.svc.cluster.local:8091/jobs/overview"')])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Total    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Received "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Xferd  Average Speed   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Time")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Time")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Time")]),s._v("  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_melookup")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_connect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_appconnect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_redirect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_pretransfer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_starttransfer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_total")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.510")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IPV6 请求耗时")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@curl-format.txt"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://flink-jobmanager.default.svc.cluster.local:8091/jobs/overview"')])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Total    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Received "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Xferd  Average Speed   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Time")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Time")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Time")]),s._v("  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_melookup")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.511")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_connect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.512")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_appconnect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_redirect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_pretransfer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.512")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_starttransfer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.515")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("time_total")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.515")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("结论：IPV6 解析比 IPV4 多耗时约 20%，说明 IPV6 对域名解析有一定的影响，建议 coredns 关闭 IPV6 解析。然而直接用 IPV4 解析也耗时 3s+，需要进一步对容器内部进行抓包分析。")]),s._v(" "),a("blockquote",[a("p",[s._v("建议：如果 IPV6 模式没有使用，可以关闭。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);