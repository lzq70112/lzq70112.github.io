(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{527:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"could-not-connect-to-redis-no-route-to-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#could-not-connect-to-redis-no-route-to-host"}},[s._v("#")]),s._v(" Could not connect to Redis No route to host")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看")]),s._v(" "),a("ul",[a("li",[s._v("一般是防火墙问题，关闭每个节点的防火墙即可")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/bin/redis-cli --cluster create  192.168.0.68:27000 192.168.0.68:27001 192.168.0.186:27000 192.168.0.186:27001 192.168.0.90:27000 192.168.0.90:27001 --cluster-replicas 1")]),s._v("\nCould not connect to Redis at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27000: No route to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl stop firewalld.service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/bin/redis-cli --cluster create  192.168.0.68:27000 192.168.0.68:27001 192.168.0.186:27000 192.168.0.186:27001 192.168.0.90:27000 192.168.0.90:27001 --cluster-replicas 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Performing "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" slots allocation on "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Slots "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5460")]),s._v("\nMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Slots "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10922")]),s._v("\nMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Slots "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10923")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16383")]),s._v("\nAdding replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27001 to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27000\nAdding replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27001 to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27000\nAdding replica "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27001 to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27000\nM: db9f53a88ca58a45c0937ee47a3059351c08be63 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27000\n   slots:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-5460"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\nS: 0b1c24d6db9152c19062a2e1cef5b893d8722e55 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27001\n   replicates ec9254a213de1d9c4d17ef2b1208e224b73bd2e2\nM: d55bafc8e5e06a17d9987ac50075118988710330 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27000\n   slots:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v("-10922"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5462")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\nS: 045ca4b6d55fd19f2b77bac013b0fa13e346b1cd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27001\n   replicates db9f53a88ca58a45c0937ee47a3059351c08be63\nM: ec9254a213de1d9c4d17ef2b1208e224b73bd2e2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27000\n   slots:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10923")]),s._v("-16383"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\nS: 22399be1d3274c8a6494a13f96030ff144e8f8ea "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27001\n   replicates d55bafc8e5e06a17d9987ac50075118988710330\nCan I "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the above configuration? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yes'")]),s._v(" to accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Nodes configuration updated\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Assign a different config epoch to each "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Sending CLUSTER MEET messages to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" the cluster\nWaiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the cluster to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Performing Cluster Check "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: db9f53a88ca58a45c0937ee47a3059351c08be63 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27000\n   slots:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-5460"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nS: 0b1c24d6db9152c19062a2e1cef5b893d8722e55 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27001\n   slots: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates ec9254a213de1d9c4d17ef2b1208e224b73bd2e2\nM: ec9254a213de1d9c4d17ef2b1208e224b73bd2e2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27000\n   slots:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10923")]),s._v("-16383"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: d55bafc8e5e06a17d9987ac50075118988710330 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27000\n   slots:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v("-10922"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5462")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nS: 22399be1d3274c8a6494a13f96030ff144e8f8ea "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27001\n   slots: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates d55bafc8e5e06a17d9987ac50075118988710330\nS: 045ca4b6d55fd19f2b77bac013b0fa13e346b1cd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27001\n   slots: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates db9f53a88ca58a45c0937ee47a3059351c08be63\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All nodes agree about slots configuration.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check slots coverage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v(" slots covered.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@summer script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.0.68 -p 27000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:2700"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" cluster nodes\n0b1c24d6db9152c19062a2e1cef5b893d8722e55 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27001@37001 slave ec9254a213de1d9c4d17ef2b1208e224b73bd2e2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608806725754")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" connected\nec9254a213de1d9c4d17ef2b1208e224b73bd2e2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27000@37000 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608806723740")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10923")]),s._v("-16383\nd55bafc8e5e06a17d9987ac50075118988710330 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27000@37000 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608806724000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v("-10922\n22399be1d3274c8a6494a13f96030ff144e8f8ea "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.90:27001@37001 slave d55bafc8e5e06a17d9987ac50075118988710330 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608806722732")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" connected\ndb9f53a88ca58a45c0937ee47a3059351c08be63 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:27000@37000 myself,master - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608806720000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-5460\n045ca4b6d55fd19f2b77bac013b0fa13e346b1cd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.186:27001@37001 slave db9f53a88ca58a45c0937ee47a3059351c08be63 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608806724747")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" connected\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.68:2700"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br")])])]),s._v(" "),a("h3",{attrs:{id:"_37000总线端口未开放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_37000总线端口未开放"}},[s._v("#")]),s._v(" 37000总线端口未开放")]),s._v(" "),a("ul",[a("li",[s._v("创建集群时一直显示"),a("code",[s._v("Waiting for the cluster to join")])])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("每个Redis集群中的节点都需要打开两个TCP连接。一个连接用于正常的给Client提供服务，比如6379，还有一个额外的端口（通过在这个端口号上加10000）作为数据端口。如16379，这是一个用二进制协议的点对点通信信道。集群总线（Cluster bus）用于节点的失败侦测、配置更新、故障转移授权，等等。客户端从来都不应该尝试和这些集群总线端口通信，它们只应该和正常的Redis命令端口进行通信。")])]),s._v(" "),a("li",[a("p",[s._v("命令端口和集群总线端口的偏移量是10000。")])])]),s._v(" "),a("p",[a("strong",[s._v("注意，集群中的每个节点都应该可以访问集群总线端口（客户端通信端口 + 10000）")])]),s._v(" "),a("p",[a("strong",[s._v("集群总线用一个不同的二进制协议通信，用于节点之间的数据交换")])])])}),[],!1,null,null,null);t.default=e.exports}}]);