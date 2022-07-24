(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{655:function(s,e,n){"use strict";n.r(e);var a=n(20),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://docs.ceph.com/en/pacific/install/manual-deployment/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方地址"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"_1、查看磁盘信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看磁盘信息"}},[s._v("#")]),s._v(" 1、查看磁盘信息")]),s._v(" "),n("p",[n("code",[s._v("ceph-deploy disk list ceph-1")]),s._v(" #查看磁盘信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[ceph-1][DEBUG ] connected to host: ceph-1 \n[ceph-1][DEBUG ] detect platform information from remote host\n[ceph-1][DEBUG ] detect machine type\n[ceph-1][DEBUG ] find the location of an executable\n[ceph-1][INFO  ] Running command: fdisk -l\n[ceph-1][INFO  ] Disk /dev/sda: 37.6 GB, 37580963840 bytes, 73400320 sectors\n[ceph-1][INFO  ] Disk /dev/sdb: 21.5 GB, 21474836480 bytes, 41943040 sectors\n[ceph-1][INFO  ] Disk /dev/sdc: 21.5 GB, 21474836480 bytes, 41943040 sectors\n# 多余的盘\n[ceph-1][INFO  ] Disk /dev/mapper/centos-root: 35.2 GB, 35219570688 bytes, 68788224 sectors\n[ceph-1][INFO  ] Disk /dev/mapper/centos-swap: 2147 MB, 2147483648 bytes, 4194304 sectors\n[ceph-1][INFO  ] Disk /dev/mapper/ceph--81838bff--e7a2--4188--85b3--6db72c15bb04-osd--block--f0a158bf--a59f--4f78--abd9--c6fe695248ff: 21.5 GB, 21470642176 bytes, 41934848 sectors\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_2、加入可用磁盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、加入可用磁盘"}},[s._v("#")]),s._v(" 2、加入可用磁盘")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph-deploy disk zap ceph-1 /dev/sdc "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入磁盘")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[ceph-1][DEBUG ] connected to host: ceph-1 \n[ceph-1][DEBUG ] detect platform information from remote host\n[ceph-1][DEBUG ] detect machine type\n[ceph-1][DEBUG ] find the location of an executable\n[ceph_deploy.osd][INFO  ] Distro info: CentOS Linux 7.9.2009 Core\n[ceph-1][DEBUG ] zeroing last few blocks of device\n[ceph-1][DEBUG ] find the location of an executable\n[ceph-1][INFO  ] Running command: /usr/sbin/ceph-volume lvm zap /dev/sdc\n[ceph-1][WARNIN] --\x3e Zapping: /dev/sdc\n[ceph-1][WARNIN] --\x3e --destroy was not specified, but zapping a whole device will remove the partition table\n[ceph-1][WARNIN] Running command: /usr/bin/dd if=/dev/zero of=/dev/sdc bs=1M count=10 conv=fsync\n[ceph-1][WARNIN] --\x3e Zapping successful for: <Raw Device: /dev/sdc>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_3、添加osd扩容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加osd扩容"}},[s._v("#")]),s._v(" 3、添加osd扩容")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph-deploy osd create  ceph-1 --data /dev/sdc "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建osd扩容")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[ceph_deploy.conf][DEBUG ] found configuration file at: /root/.cephdeploy.conf\n[ceph_deploy.cli][INFO  ] Invoked (2.0.1): /usr/bin/ceph-deploy osd create ceph-1 --data /dev/sdc\n[ceph_deploy.cli][INFO  ] ceph-deploy options:\n[ceph_deploy.cli][INFO  ]  verbose                       : False\n[ceph_deploy.cli][INFO  ]  bluestore                     : None\n[ceph_deploy.cli][INFO  ]  cd_conf                       : <ceph_deploy.conf.cephdeploy.Conf instance at 0x7f7cec88f830>\n[ceph_deploy.cli][INFO  ]  cluster                       : ceph\n[ceph_deploy.cli][INFO  ]  fs_type                       : xfs\n[ceph_deploy.cli][INFO  ]  block_wal                     : None\n[ceph_deploy.cli][INFO  ]  default_release               : False\n[ceph_deploy.cli][INFO  ]  username                      : None\n[ceph_deploy.cli][INFO  ]  journal                       : None\n[ceph_deploy.cli][INFO  ]  subcommand                    : create\n[ceph_deploy.cli][INFO  ]  host                          : ceph-1\n[ceph_deploy.cli][INFO  ]  filestore                     : None\n[ceph_deploy.cli][INFO  ]  func                          : <function osd at 0x7f7cecad98c0>\n[ceph_deploy.cli][INFO  ]  ceph_conf                     : None\n[ceph_deploy.cli][INFO  ]  zap_disk                      : False\n[ceph_deploy.cli][INFO  ]  data                          : /dev/sdc\n[ceph_deploy.cli][INFO  ]  block_db                      : None\n[ceph_deploy.cli][INFO  ]  dmcrypt                       : False\n[ceph_deploy.cli][INFO  ]  overwrite_conf                : False\n[ceph_deploy.cli][INFO  ]  dmcrypt_key_dir               : /etc/ceph/dmcrypt-keys\n[ceph_deploy.cli][INFO  ]  quiet                         : False\n[ceph_deploy.cli][INFO  ]  debug                         : False\n[ceph_deploy.osd][DEBUG ] Creating OSD on cluster ceph with data device /dev/sdc\n[ceph-1][DEBUG ] connected to host: ceph-1 \n[ceph-1][DEBUG ] detect platform information from remote host\n[ceph-1][DEBUG ] detect machine type\n[ceph-1][DEBUG ] find the location of an executable\n[ceph_deploy.osd][INFO  ] Distro info: CentOS Linux 7.9.2009 Core\n[ceph_deploy.osd][DEBUG ] Deploying osd to ceph-1\n[ceph-1][DEBUG ] write cluster configuration to /etc/ceph/{cluster}.conf\n[ceph-1][DEBUG ] find the location of an executable\n[ceph-1][INFO  ] Running command: /usr/sbin/ceph-volume --cluster ceph lvm create --bluestore --data /dev/sdc\n[ceph-1][WARNIN] Running command: /usr/bin/ceph-authtool --gen-print-key\n[ceph-1][WARNIN] Running command: /usr/bin/ceph --cluster ceph --name client.bootstrap-osd --keyring /var/lib/ceph/bootstrap-osd/ceph.keyring -i - osd new 25541fc6-853f-4d3a-b5a0-81028700478e\n[ceph-1][WARNIN] Running command: /usr/sbin/vgcreate --force --yes ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176 /dev/sdc\n[ceph-1][WARNIN]  stdout: Physical volume "/dev/sdc" successfully created.\n[ceph-1][WARNIN]  stdout: Volume group "ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176" successfully created\n[ceph-1][WARNIN] Running command: /usr/sbin/lvcreate --yes -l 5119 -n osd-block-25541fc6-853f-4d3a-b5a0-81028700478e ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176\n[ceph-1][WARNIN]  stdout: Logical volume "osd-block-25541fc6-853f-4d3a-b5a0-81028700478e" created.\n[ceph-1][WARNIN] Running command: /usr/bin/ceph-authtool --gen-print-key\n[ceph-1][WARNIN] Running command: /usr/bin/mount -t tmpfs tmpfs /var/lib/ceph/osd/ceph-3\n[ceph-1][WARNIN] Running command: /usr/bin/chown -h ceph:ceph /dev/ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176/osd-block-25541fc6-853f-4d3a-b5a0-81028700478e\n[ceph-1][WARNIN] Running command: /usr/bin/chown -R ceph:ceph /dev/dm-3\n[ceph-1][WARNIN] Running command: /usr/bin/ln -s /dev/ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176/osd-block-25541fc6-853f-4d3a-b5a0-81028700478e /var/lib/ceph/osd/ceph-3/block\n[ceph-1][WARNIN] Running command: /usr/bin/ceph --cluster ceph --name client.bootstrap-osd --keyring /var/lib/ceph/bootstrap-osd/ceph.keyring mon getmap -o /var/lib/ceph/osd/ceph-3/activate.monmap\n[ceph-1][WARNIN]  stderr: 2021-11-16 21:00:53.124 7f4966518700 -1 auth: unable to find a keyring on /etc/ceph/ceph.client.bootstrap-osd.keyring,/etc/ceph/ceph.keyring,/etc/ceph/keyring,/etc/ceph/keyring.bin,: (2) No such file or directory\n[ceph-1][WARNIN] 2021-11-16 21:00:53.124 7f4966518700 -1 AuthRegistry(0x7f49600662f8) no keyring found at /etc/ceph/ceph.client.bootstrap-osd.keyring,/etc/ceph/ceph.keyring,/etc/ceph/keyring,/etc/ceph/keyring.bin,, disabling cephx\n[ceph-1][WARNIN]  stderr: got monmap epoch 3\n[ceph-1][WARNIN] Running command: /usr/bin/ceph-authtool /var/lib/ceph/osd/ceph-3/keyring --create-keyring --name osd.3 --add-key AQBUYpRhZpSZDBAA1c0wU2QdQuuhx5/wDoK5gA==\n[ceph-1][WARNIN]  stdout: creating /var/lib/ceph/osd/ceph-3/keyring\n[ceph-1][WARNIN] added entity osd.3 auth(key=AQBUYpRhZpSZDBAA1c0wU2QdQuuhx5/wDoK5gA==)\n[ceph-1][WARNIN] Running command: /usr/bin/chown -R ceph:ceph /var/lib/ceph/osd/ceph-3/keyring\n[ceph-1][WARNIN] Running command: /usr/bin/chown -R ceph:ceph /var/lib/ceph/osd/ceph-3/\n[ceph-1][WARNIN] Running command: /usr/bin/ceph-osd --cluster ceph --osd-objectstore bluestore --mkfs -i 3 --monmap /var/lib/ceph/osd/ceph-3/activate.monmap --keyfile - --osd-data /var/lib/ceph/osd/ceph-3/ --osd-uuid 25541fc6-853f-4d3a-b5a0-81028700478e --setuser ceph --setgroup ceph\n[ceph-1][WARNIN]  stderr: 2021-11-16 21:00:53.717 7f25ea435a80 -1 bluestore(/var/lib/ceph/osd/ceph-3/) _read_fsid unparsable uuid\n[ceph-1][WARNIN] --\x3e ceph-volume lvm prepare successful for: /dev/sdc\n[ceph-1][WARNIN] Running command: /usr/bin/chown -R ceph:ceph /var/lib/ceph/osd/ceph-3\n[ceph-1][WARNIN] Running command: /usr/bin/ceph-bluestore-tool --cluster=ceph prime-osd-dir --dev /dev/ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176/osd-block-25541fc6-853f-4d3a-b5a0-81028700478e --path /var/lib/ceph/osd/ceph-3 --no-mon-config\n[ceph-1][WARNIN] Running command: /usr/bin/ln -snf /dev/ceph-4642dde2-93ff-4ba5-b1f8-3d5cca9b1176/osd-block-25541fc6-853f-4d3a-b5a0-81028700478e /var/lib/ceph/osd/ceph-3/block\n[ceph-1][WARNIN] Running command: /usr/bin/chown -h ceph:ceph /var/lib/ceph/osd/ceph-3/block\n[ceph-1][WARNIN] Running command: /usr/bin/chown -R ceph:ceph /dev/dm-3\n[ceph-1][WARNIN] Running command: /usr/bin/chown -R ceph:ceph /var/lib/ceph/osd/ceph-3\n[ceph-1][WARNIN] Running command: /usr/bin/systemctl enable ceph-volume@lvm-3-25541fc6-853f-4d3a-b5a0-81028700478e\n[ceph-1][WARNIN]  stderr: Created symlink from /etc/systemd/system/multi-user.target.wants/ceph-volume@lvm-3-25541fc6-853f-4d3a-b5a0-81028700478e.service to /usr/lib/systemd/system/ceph-volume@.service.\n[ceph-1][WARNIN] Running command: /usr/bin/systemctl enable --runtime ceph-osd@3\n[ceph-1][WARNIN]  stderr: Created symlink from /run/systemd/system/ceph-osd.target.wants/ceph-osd@3.service to /usr/lib/systemd/system/ceph-osd@.service.\n[ceph-1][WARNIN] Running command: /usr/bin/systemctl start ceph-osd@3\n[ceph-1][WARNIN] --\x3e ceph-volume lvm activate successful for osd ID: 3\n[ceph-1][WARNIN] --\x3e ceph-volume lvm create successful for: /dev/sdc\n[ceph-1][INFO  ] checking OSD status...\n[ceph-1][DEBUG ] find the location of an executable\n[ceph-1][INFO  ] Running command: /bin/ceph --cluster=ceph osd stat --format=json\n[ceph_deploy.osd][DEBUG ] Host ceph-1 is now ready for osd use.\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph -s "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看集群osd是否为4个")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  cluster:\n    id:     ad3d4441-898a-475c-bfe7-ee2fa625e2a0\n    health: HEALTH_WARN\n            Degraded data redundancy: 729/13029 objects degraded (5.595%), 46 pgs degraded, 5 pgs undersized\n \n  services:\n    mon: 3 daemons, quorum ceph-1,ceph-2,ceph-3 (age 23m)\n    mgr: ceph-2(active, since 24m), standbys: ceph-3, ceph-1\n    mds: ceph-demo:1 {0=ceph-2=up:active} 2 up:standby\n    osd: 4 osds: 4 up (since 2m), 4 in (since 2m); 26 remapped pgs\n    rgw: 1 daemon active (ceph-1)\n \n  task status:\n \n  data:\n    pools:   9 pools, 384 pgs\n    objects: 4.34k objects, 1.2 GiB\n    usage:   8.4 GiB used, 52 GiB / 60 GiB avail\n    pgs:     729/13029 objects degraded (5.595%)\n             706/13029 objects misplaced (5.419%)\n             314 active+clean\n             41  active+recovery_wait+degraded\n             15  active+remapped+backfill_wait\n             5   active+recovery_wait+undersized+degraded+remapped\n             5   active+recovery_wait+remapped\n             3   active+recovery_wait\n             1   active+recovering+remapped\n \n  io:\n    recovery: 49 KiB/s, 7 objects/s\n \n  progress:\n    Rebalancing after osd.3 marked in\n      [===================...........]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("当您将 Ceph OSD 守护进程添加到 Ceph 存储集群时，集群映射会使用新的 OSD 进行更新。回到[Calculating PG IDs](https://docs.ceph.com/en/pacific/architecture/?highlight=Rebalancing #calculating-pg-ids)，这会改变集群映射。因此，它改变了对象的放置，因为它改变了计算的输入。下图描述了重新平衡 过程（尽管相当粗糙，因为它对大型集群的影响要小得多），其中一些但不是全部 PG 从现有 OSD（OSD 1 和 OSD 2）迁移到新 OSD（OSD 3） ）。即使在重新平衡时，CRUSH 也是稳定的。许多归置组仍保留其原始配置，并且每个 OSD 都会增加一些容量，因此在重新平衡完成后，新 OSD 上不会出现负载峰值。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/lzq70112/images/master/blog/image-20211117101114828.png",alt:"image-20211117101114828"}})]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v(" ceph osd tree "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看各个节点的osd情况")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ID CLASS WEIGHT  TYPE NAME       STATUS REWEIGHT PRI-AFF \n-1       0.05856 root default                            \n-3       0.03897     host ceph-1                         \n 0   hdd 0.01949         osd.0       up  1.00000 1.00000 \n 3   hdd 0.01949         osd.3       up  1.00000 1.00000 \n-5       0.00980     host ceph-2                         \n 1   hdd 0.00980         osd.1       up  1.00000 1.00000 \n-7       0.00980     host ceph-3                         \n 2   hdd 0.00980         osd.2       up  1.00000 1.00000 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_4、关闭rebalance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、关闭rebalance"}},[s._v("#")]),s._v(" 4、关闭Rebalance")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" norebalance "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭rebalance")]),s._v("\nceph osd "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" nobackfill "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭nobackfill ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" norebalance "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#取消关闭rebalance")]),s._v("\nceph osd "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" nobackfill "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#取消关闭nobackfill ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_5、osd更换坏盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、osd更换坏盘"}},[s._v("#")]),s._v(" 5、osd更换坏盘")]),s._v(" "),n("h3",{attrs:{id:"_5-1、查看坏的osd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、查看坏的osd"}},[s._v("#")]),s._v(" 5.1、查看坏的osd")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dmesg")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看磁盘的一些系统信息")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd perf "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看ceph osd的延迟")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("osd commit_latency(ms) apply_latency(ms) \n  3                  0                 0 \n  0                  0                 0 \n  2                  0                 0 \n  1                  0                 0 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd out osd.3 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#提出坏掉盘")]),s._v("\nceph crush map "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看crush表")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("no valid command found; 10 closest matches:\nconfig get <who> {<key>}\nconfig dump\nconfig set <who> <name> <value> {--force}\nconfig rm <who> <name>\nmgr count-metadata <property>\nmgr versions\nosd crush reweight <name> <float[0.0-]>\nosd crush reweight-all\nosd crush unlink <name> {<ancestor>}\nosd crush rm <name> {<ancestor>}\nError EINVAL: invalid command\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_5-2、删除osd信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、删除osd信息"}},[s._v("#")]),s._v(" 5.2、删除osd信息")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd crush dump "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看crush map还是有osd的信息")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('            "name": "osd.3",\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v(" ceph osd crush "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" osd.3 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除对应的")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("removed item id 3 name 'osd.3' from crush map\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_5-3、删除对应osd-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3、删除对应osd-tree"}},[s._v("#")]),s._v(" 5.3、删除对应osd tree")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd tree "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ID CLASS WEIGHT  TYPE NAME       STATUS REWEIGHT PRI-AFF \n-1       0.03908 root default                            \n-3       0.01949     host ceph-1                         \n 0   hdd 0.01949         osd.0       up  1.00000 1.00000 \n-5       0.00980     host ceph-2                         \n 1   hdd 0.00980         osd.1       up  1.00000 1.00000 \n-7       0.00980     host ceph-3                         \n 2   hdd 0.00980         osd.2       up  1.00000 1.00000 \n 3             0 osd.3             down        0 1.00000 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph osd  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" osd.3 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除对应的osd tree中的信息")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_5-4、删掉对应auth-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4、删掉对应auth-list"}},[s._v("#")]),s._v(" 5.4、删掉对应auth list")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph auth list "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看对应认证列表")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("osd.3\n        key: AQBUYpRhZpSZDBAA1c0wU2QdQuuhx5/wDoK5gA==\n        caps: [mgr] allow profile osd\n        caps: [mon] allow profile osd\n        caps: [osd] allow *\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v(" ceph auth del osd.3 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除对应的认证列表")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_6、检查数据一致性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、检查数据一致性"}},[s._v("#")]),s._v(" 6、检查数据一致性")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("ceph pg scrub "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.37")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#针对pg轻量scrub")]),s._v("\nceph pg deep-scrub "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.37")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#针对pg深度scrub")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);