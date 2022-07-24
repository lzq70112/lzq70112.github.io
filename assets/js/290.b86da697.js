(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{760:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-卸载存在的java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-卸载存在的java"}},[s._v("#")]),s._v(" 1.卸载存在的java")]),s._v(" "),t("p",[s._v("卸载掉现有的JAVA版本的话，可以使用\n"),t("code",[s._v("rpm -qa | grep java")]),s._v(" 和 "),t("code",[s._v("rpm -e xxx --nodeps")]),s._v("进行卸载")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html#license-lightbox",target:"_blank",rel:"noopener noreferrer"}},[s._v("java官方包"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_2-安装脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装脚本"}},[s._v("#")]),s._v(" 2.安装脚本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"----------------------------------------------------------"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("install_java")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"检查java......"')]),s._v("\n    java -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"检查到java已安装!"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装jdk")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/java/ -p\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xf jdk-* -C /usr/local/java/\n        "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/local/java/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" jdk1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nJAVA_HOME=/usr/local/java/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v("\nCLASSPATH=.:\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib.tools.jar\nPATH=\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:\\"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\nexport JAVA_HOME CLASSPATH PATH\nEOF")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新环境变量")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java环境安装完成......"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ninstall_java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"_3、注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、注意"}},[s._v("#")]),s._v(" 3、注意")]),s._v(" "),t("p",[s._v("一个shell脚本文件中有一个source命令，使用"),t("code",[s._v("bash a.sh")]),s._v("命令执行后source命令进行验证没有生效。\n这是因为在shell脚本中执行source会看到效果，但是shell脚本执行完后再次验证就没看到效果。\n此时可以换这种方式执行shell脚本命令：")]),s._v(" "),t("p",[t("code",[s._v("source a.sh")])])])}),[],!1,null,null,null);a.default=e.exports}}]);