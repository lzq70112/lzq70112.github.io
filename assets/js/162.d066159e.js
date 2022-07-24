(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{632:function(t,e,r){"use strict";r.r(e);var o=r(20),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("KVM创建虚拟机\n")]),t._v(" "),r("h2",{attrs:{id:"_1、qemu创建镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、qemu创建镜像"}},[t._v("#")]),t._v(" "),r("strong",[t._v("1、qemu创建镜像")])]),t._v(" "),r("p",[r("code",[t._v("qemu-img create -f raw /opt/Centos-7.4-x86.64.raw 10G")]),t._v("  #创建一个10G大小，指定路径的文件，和硬盘格式")]),t._v(" "),r("p",[r("code",[t._v("qemu-img create -f qcow2 /opt/k8s-master.qcow2 10G")]),t._v("#格式")]),t._v(" "),r("h2",{attrs:{id:"_2、配置一台虚拟机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置一台虚拟机"}},[t._v("#")]),t._v(" "),r("strong",[t._v("2、配置一台虚拟机")])]),t._v(" "),r("p",[r("code",[t._v("yum -y install virt-install")]),t._v(" #虚拟机安装时依赖环境")]),t._v(" "),r("p",[r("code",[t._v("virt-install --virt-type kvm --name lzq --ram 2048 --cdrom=/opt/CentOS-7-x86_64-Minimal-1810.iso --disk path=/opt/Centos-7.4-x86.64.raw --network network=default --graphics vnc,listen=0.0.0.0 --noautoconsole")])]),t._v(" "),r("p",[t._v("#配置安装一台虚拟类型为kvm 名字为lzq 内存为2G cdrom路径 指定qemu路径 network为默认，图像化为vnc 监听所有地址，不自动consle")]),t._v(" "),r("p",[r("code",[t._v("virsh list")]),t._v(" #查看v虚拟机运行的情况")])])}),[],!1,null,null,null);e.default=s.exports}}]);