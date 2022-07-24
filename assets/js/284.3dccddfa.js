(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{754:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、安装v2raya"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装v2raya"}},[s._v("#")]),s._v(" 1、安装V2rayA")]),s._v(" "),t("p",[s._v("V2ray代码核心")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -O https://cdn.jsdelivr.net/gh/v2rayA/v2rayA@master/install/go.sh\nsudo bash go.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("手动离线安装")]),s._v(" "),t("p",[s._v("https://github.com/v2fly/v2ray-core/releases/tag/v4.43.0")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/bin/ /var/log/v2ray/ /usr/local/share/v2ray/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" v2ray /usr/local/bin/v2ray\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" v2ctl /usr/local/bin/v2ctl\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" geoip.dat /usr/local/share/v2ray/geoip.dat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" geosite.dat /usr/local/share/v2ray/geosite.dat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config.json /usr/local/etc/v2ray/config.json\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /var/log/v2ray/access.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v("  /var/log/v2ray/error.log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./systemd/system/*  /etc/systemd/system/\n\nsystemctl start v2ray\nsystemctl status v2ray\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" v2ray\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://github.com/v2rayA/v2rayA/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("v2RayA下载"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://v2raya.org/docs/prologue/installation/debian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" /path/download/installer_debian_xxx_vxxx.deb \n\n systemctl start v2raya.service\n systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" v2raya.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_2、配置v2raya"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置v2raya"}},[s._v("#")]),s._v(" 2、配置V2rayA")]),s._v(" "),t("p",[s._v("http://192.168.2.223:2017/")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/image-20211023224102620.png",alt:"image-20211023224102620"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/image-20211023224303356.png",alt:"image-20211023224303356"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);