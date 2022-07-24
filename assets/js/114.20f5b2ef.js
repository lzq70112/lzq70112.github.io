(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{583:function(s,a,n){"use strict";n.r(a);var t=n(20),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("有5种方法可以让集群外访问运行在Kubernetes集群上的应用程序(pod)。接下来我们详细讨论Kubernetes的hostNetwork，hostPort，NodePort，LoadBalancer和Ingress功能。")]),s._v(" "),n("h2",{attrs:{id:"_1、hostnetwork"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、hostnetwork"}},[s._v("#")]),s._v(" 1、hostNetwork")]),s._v(" "),n("p",[n("strong",[s._v("demo")])]),s._v(" "),n("p",[s._v("hostNetwork设置适用于Kubernetes pod。当pod配置为hostNetwork：true时，在此类pod中运行的应用程序可以直接查看启动pod的主机的网络接口。配置为侦听所有网络接口的应用程序，又可以在主机的所有网络接口上访问。以下是使用主机网络的pod的示例定义:")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" influxdb\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostNetwork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" influxdb\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" influxdb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_2、hostport"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、hostport"}},[s._v("#")]),s._v(" 2、hostport")]),s._v(" "),n("p",[s._v("hostPort是直接将容器的端口与所调度的节点上的端口路由，这样用户就可以通过宿主机的IP加上来访问Pod了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: influxdb\nspec:\n  containers:\n    - name: influxdb\n      image: influxdb\n      ports:\n        - containerPort: 8086\n          hostPort: 8086\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"_3、nodeport"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、nodeport"}},[s._v("#")]),s._v(" 3、nodeport")]),s._v(" "),n("p",[s._v("外部流量访问k8s集群中service入口的一种方式（另一种方式是LoadBalancer），即nodeIP:nodePort是提供给外部流量访问k8s集群中service的入口。比如外部用户要访问k8s集群中的一个Web应用，那么我们可以配置对应service的type=NodePort，nodePort=30001。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n name: nginx-service\nspec:\n type: NodePort         // 有配置NodePort，外部流量可访问k8s中的服务\n ports:\n - port: 30080          // 服务访问端口\n   targetPort: 80       // 容器端口\n   nodePort: 30001      // NodePort\n selector:\n  name: nginx-pod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_4、ingress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、ingress"}},[s._v("#")]),s._v(" 4、ingress")]),s._v(" "),n("div",{staticClass:"language-SH line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("spec:\n    rules:\n    - host: rancher.my.test.org   ---规则1： 对应的host即域名为他\n      http:                                 这条规则是for上面创建的那个名叫rancher的service, 会访问这个服务的80端口\n        paths:\n        - path: /example    ---可省略\n          backend:\n            serviceName: rancher\n            servicePort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    - host: bar.foo.com      ---这个是用来解释何为"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name based virtual hosting"')]),s._v("的\n      http:\n        paths:\n        - backend:\n            serviceName: service2\n            servicePort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\n\n    tls:                                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" https，使用的证书信息在名叫tls-rancher-ingress的secret中\n    - hosts:\n      - rancher.my.test.org\n      secretName: tls-rancher-ingress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"_5、端口转发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、端口转发"}},[s._v("#")]),s._v(" 5、端口转发")]),s._v(" "),n("p",[s._v("https://hongwei888.com/pages/b15e15699/#_1%E3%80%81%E9%97%AE%E9%A2%98%E6%A6%82%E8%BF%B0")])])}),[],!1,null,null,null);a.default=e.exports}}]);