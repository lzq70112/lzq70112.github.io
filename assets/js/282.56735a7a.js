(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{752:function(e,a,n){"use strict";n.r(a);var s=n(20),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("zookeeper报错： Cannot open channel to 2 at election address cdh03/192.168.5.148:3888\n")]),e._v(" "),n("h2",{attrs:{id:"_1、问题描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、问题描述"}},[e._v("#")]),e._v(" 1、问题描述")]),e._v(" "),n("p",[e._v("zookeeper 集群连接有问题")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("4-11 13:22:04,594 [myid:1] - WARN  [WorkerSender[myid=1]:QuorumCnxManager@584] - Cannot open channel to 2 at election address cdh03/192.168.5.148:3888\njava.net.ConnectException: Connection refused (Connection refused)\n    at java.net.PlainSocketImpl.socketConnect(Native Method)\n    at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n    at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n    at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n    at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n    at java.net.Socket.connect(Socket.java:589)\n    at org.apache.zookeeper.server.quorum.QuorumCnxManager.connectOne(QuorumCnxManager.java:558)\n    at org.apache.zookeeper.server.quorum.QuorumCnxManager.toSend(QuorumCnxManager.java:534)\n    at org.apache.zookeeper.server.quorum.FastLeaderElection$Messenger$WorkerSender.process(FastLeaderElection.java:454)\n    at org.apache.zookeeper.server.quorum.FastLeaderElection$Messenger$WorkerSender.run(FastLeaderElection.java:435)\n    at java.lang.Thread.run(Thread.java:748)\n                4-11 13:22:04,597 [myid:1] - INFO  [WorkerSender[myid=1]:QuorumPeer$QuorumServer@184] - Resolved hostname: cdh03 to address: cdh03/192.168.5.148\n                4-11 13:22:04,598 [myid:1] - WARN  [WorkerSender[myid=1]:QuorumCnxManager@584] - Cannot open channel to 3 at election address cdh04/192.168.5.149:3888\njava.net.ConnectException: Connection refused (Connection refused)\n    at java.net.PlainSocketImpl.socketConnect(Native Method)\n    at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n    at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n    at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n    at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n    at java.net.Socket.connect(Socket.java:589)\n    at org.apache.zookeeper.server.quorum.QuorumCnxManager.connectOne(QuorumCnxManager.java:558)\n    at org.apache.zookeeper.server.quorum.QuorumCnxManager.toSend(QuorumCnxManager.java:534)\n    at org.apache.zookeeper.server.quorum.FastLeaderElection$Messenger$WorkerSender.process(FastLeaderElection.java:454)\n    at org.apache.zookeeper.server.quorum.FastLeaderElection$Messenger$WorkerSender.run(FastLeaderElection.java:435)\n    at java.lang.Thread.run(Thread.java:748)\n                4-11 13:22:04,599 [myid:1] - INFO  [WorkerSender[myid=1]:QuorumPeer$QuorumServer@184] - Resolved hostname: cdh04 to address: cdh04/192.168.5.149\n                4-11 13:22:04,807 [myid:1] - WARN  [QuorumPeer[myid=1]/0:0:0:0:0:0:0:0:2181:QuorumCnxManager@584] - Cannot open channel to 2 at election address cdh03/192.168.5.148:3888\njava.net.ConnectException: Connection refused (Connection refused)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br")])]),n("h2",{attrs:{id:"_2、解决方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、解决方法"}},[e._v("#")]),e._v(" 2、解决方法")]),e._v(" "),n("p",[e._v("本节点需要0.0.0.0来绑定")]),e._v(" "),n("p",[n("code",[e._v("cat /opt/software/zookeeper-3.4.13/conf/zoo.cfg")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server.1=0.0.0.0:2888:3888\nserver.2=cdh03:2888:3888\nserver.3=cdh04:2888:3888\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("code",[e._v("cat /opt/software/zookeeper-3.4.13/conf/zoo.cfg")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server.1=cdh02:2888:3888\nserver.2=0.0.0.0:2888:3888\nserver.3=cdh04:2888:3888\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("code",[e._v("cat /opt/software/zookeeper-3.4.13/conf/zoo.cfg")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server.1=cdh02:2888:3888\nserver.2=cdh03:2888:3888\nserver.3=0.0.0.0:2888:3888\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);