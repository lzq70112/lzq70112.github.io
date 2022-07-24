(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{604:function(t,e,s){"use strict";s.r(e);var a=s(20),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Etcd 默认不会自动 compact，需要设置启动参数，或者通过命令进行compact，如果变更频繁建议设置，否则会导致空间和内存的浪费以及错误。Etcd v3 的默认的 backend quota 2GB，如果不 compact，boltdb 文件大小超过这个限制后，就会报错：”Error: etcdserver: mvcc: database space exceeded”，导致数据无法写入。")]),t._v(" "),s("h2",{attrs:{id:"_1、故障查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、故障查看"}},[t._v("#")]),t._v(" 1、故障查看")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" etcdctl --endpoints"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":2379 --cacert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.crt --key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.key endpoint status\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#或者静态pod的形式查看")]),t._v("\n nerdctl -n k8s.io  run --rm  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd'")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/u01/local/kube-system:/u01/local/kube-system'")]),t._v("   --env "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker.xiongmao.com:15000/etcd:3.4.13-0"')]),t._v(" /bin/sh -c   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcdctl --endpoints=https://10.165.76.41:2379            --cert=/etc/kubernetes/pki/etcd/server.crt  --key=/etc/kubernetes/pki/etcd/server.key --cacert=/etc/kubernetes/pki/etcd/ca.crt --write-out=table endpoint status "')]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/202206081313055.png;charset=UTF-8",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"_2、处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、处理"}},[t._v("#")]),t._v(" 2、处理")]),t._v(" "),s("p",[t._v("要从空间不足配额警报中恢复：")]),t._v(" "),s("ol",[s("li",[t._v("Compact etcd的历史。")]),t._v(" "),s("li",[t._v("对每个etcd端点进行碎片整理。")]),t._v(" "),s("li",[t._v("解除警报。")])]),t._v(" "),s("p",[t._v("二进制")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、获取当前的版本")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rev")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" etcdctl --endpoints"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":2379 --cacert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.crt --key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.key endpoint status --write-out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("egrep")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"revision\":[0-9]*'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("egrep")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[0-9]*'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、压缩当前版本之前的所有记录")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" etcdctl compact "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rev")]),t._v(" --endpoints"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":2379  --cacert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.crt --key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.key\ncompacted revision "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1516")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、清理多余的碎片空间")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" etcdctl defrag --endpoints"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":2379  --cacert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.crt --key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.key\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4、解除警告")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" etcdctl alarm disarm --endpoints"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":2379  --cacert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.crt --key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/healthcheck-client.key\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("静态pod")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#压缩etcd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1. 查询DB SIZE")]),t._v("\nnerdctl -n k8s.io  run --rm  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd'")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/u01/local/kube-system:/u01/local/kube-system'")]),t._v("   --env "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker.xiongmao.com:15000/etcd:3.5.0-0"')]),t._v(" /bin/sh -c   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcdctl --endpoints=https://192.168.2.5:2379,https://192.168.2.6:2379,https://192.168.2.7:2379            --cert=/etc/kubernetes/pki/etcd/server.crt  --key=/etc/kubernetes/pki/etcd/server.key --cacert=/etc/kubernetes/pki/etcd/ca.crt --write-out=table endpoint status"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2. 获取当前版本rev(各成员应相同)")]),t._v("\nnerdctl -n k8s.io  run --rm  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd'")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/u01/local/kube-system:/u01/local/kube-system'")]),t._v("   --env "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker.xiongmao.com:15000/etcd:3.4.13-0"')]),t._v(" /bin/sh -c   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcdctl --endpoints=https://192.168.2.5:2379            --cert=/etc/kubernetes/pki/etcd/server.crt  --key=/etc/kubernetes/pki/etcd/server.key --cacert=/etc/kubernetes/pki/etcd/ca.crt  endpoint status --write-out="')]),t._v("json"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("egrep")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"revision\":[0-9]*'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("egrep")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[0-9]*'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3. 压缩当前版本之前的所有记录（compacted revision 1599611040）")]),t._v("\nnerdctl -n k8s.io  run --rm  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd'")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/u01/local/kube-system:/u01/local/kube-system'")]),t._v("   --env "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker.xiongmao.com:15000/etcd:3.4.13-0"')]),t._v(" /bin/sh -c   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcdctl --endpoints=https://192.168.2.6:2379            --cert=/etc/kubernetes/pki/etcd/server.crt  --key=/etc/kubernetes/pki/etcd/server.key --cacert=/etc/kubernetes/pki/etcd/ca.crt  compact 1600300240"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4. 清理多余碎片空间，在各成员节点执行 （Finished defragmenting etcd member[https://192.168.2.6:2379]）")]),t._v("\nnerdctl -n k8s.io  run --rm  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd'")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/u01/local/kube-system:/u01/local/kube-system'")]),t._v("   --env "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker.xiongmao.com:15000/etcd:3.4.13-0"')]),t._v(" /bin/sh -c   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcdctl --endpoints=https://192.168.2.5:2379,https://192.168.2.6:2379,https://192.168.2.7:2379            --cert=/etc/kubernetes/pki/etcd/server.crt  --key=/etc/kubernetes/pki/etcd/server.key --cacert=/etc/kubernetes/pki/etcd/ca.crt  defrag --command-timeout=120s"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5. 解除告警，在各成员节点执行（正常无返回）")]),t._v("\nnerdctl -n k8s.io  run --rm  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/kubernetes/pki/etcd:/etc/kubernetes/pki/etcd'")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/u01/local/kube-system:/u01/local/kube-system'")]),t._v("   --env "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker.xiongmao.com:15000/etcd:3.4.13-0"')]),t._v(" /bin/sh -c   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcdctl --endpoints=https://192.168.2.5:2379,https://192.168.2.6:2379,https://192.168.2.7:2379            --cert=/etc/kubernetes/pki/etcd/server.crt  --key=/etc/kubernetes/pki/etcd/server.key --cacert=/etc/kubernetes/pki/etcd/ca.crt  alarm disarm"')]),t._v("\n\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lzq70112/images/blog/202206081314061.png;charset=UTF-8",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"_3、etcd-扩容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、etcd-扩容"}},[t._v("#")]),t._v(" 3、etcd 扩容")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/kubernetes/manifests/etcd.yaml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- --quota-backend-bytes=8589934592   #控制etcd容量参数\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);