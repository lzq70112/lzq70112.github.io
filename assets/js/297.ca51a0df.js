(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{767:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("将将一个文本的奇数行和偶数行合并")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@summer ~]# cat johb.txt \n11111111111111\n22222222222222\n33333333333333\n44444444444444\n55555555555555\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[s._v("#")]),s._v(" 解答")]),s._v(" "),a("ol",[a("li",[s._v("N表示读取下一行，给sed处理，也就是sed同时处理2行")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sed 'N;s#\\n# #g' johb.txt ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11111111111111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22222222222222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33333333333333")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44444444444444")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55555555555555")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("xargs默认使用的是空格为分隔符，通过-d指定新的分隔符，这里修改为\\n回车换行 为分隔符。-n2表示以回车为换行符后，我要每行显示两列，也就是两行。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# xargs -d "\\n" -n2 < johb.txt ')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11111111111111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22222222222222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33333333333333")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44444444444444")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55555555555555")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("当前行是奇数行时执行line=$0，将整行赋值给line，next跳过其余的命令")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# awk 'NR%2==1{line=$0;next}{print line,$0}' johb.txt ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11111111111111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22222222222222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33333333333333")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44444444444444")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("awk判断奇偶行并显示")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# awk '{if(NR%2==0) print $0;else printf $0 \" \"}' johb.txt ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11111111111111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22222222222222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33333333333333")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44444444444444")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55555555555555")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);