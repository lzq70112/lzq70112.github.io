(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{521:function(s,e,t){"use strict";t.r(e);var n=t(20),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"当我们k8s部署nginx时80端口开不了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当我们k8s部署nginx时80端口开不了"}},[s._v("#")]),s._v(" 当我们K8s部署nginx时80端口开不了")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nginx-service.yaml")]),s._v("\nThe Service "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-service"')]),s._v(" is invalid: spec.ports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".nodePort: Invalid value: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(": provided port is not "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the valid range. The range of valid ports is "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("-32767\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[t("strong",[s._v("Kubernetes 服务的 NodePort 默认端口范围是 30000-32767，在某些场合下，这个限制不太适用，我们可以自定义它的端口范围，操作步骤如下：")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/kubernetes/manifests/kube-apiserver.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("增加红圈配置即可\n"),t("code",[s._v("- --service-node-port-range=2-65535")]),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/79.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("修改完成后，使用 docker ps 命令找到 kube-apiserver 容器，再使用 docker restart <ApiServer 容器 ID> 即可生效。(默认情况，一旦修改了配置文件，它也会自己重启)。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);