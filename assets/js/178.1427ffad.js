(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{648:function(s,a,n){"use strict";n.r(a);var t=n(20),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法"}},[s._v("#")]),s._v(" 1. 语法")]),s._v(" "),n("p",[s._v("在jinja2中，存在三种语法：")]),s._v(" "),n("ol",[n("li",[s._v("控制结构 {% %}")]),s._v(" "),n("li",[s._v("变量取值 "+s._s())])]),s._v(" "),n("blockquote",[n("p",[s._v("jinja2模板中使用 "+s._s()+" 语法表示一个变量，它是一种特殊的占位符。当利用jinja2进行渲染的时候，它会把这些特殊的占位符进行填充/替换，jinja2支持python中所有的Python数据类型比如列表、字段、对象等。")])]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("注释 {# #}")])]),s._v(" "),n("h2",{attrs:{id:"_2-过滤器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-过滤器"}},[s._v("#")]),s._v(" 2. 过滤器")]),s._v(" "),n("p",[s._v("变量可以通过“过滤器”进行修改，过滤器可以理解为是jinja2里面的内置函数和字符串处理函数。")]),s._v(" "),n("p",[s._v("常用的过滤器有：")]),s._v(" "),n("ul",[n("li",[s._v("safe:      渲染时值不转义")]),s._v(" "),n("li",[s._v("capitialize:   把值的首字母转换成大写，其他子母转换为小写")]),s._v(" "),n("li",[s._v("lower:    把值转换成小写形式")]),s._v(" "),n("li",[s._v("upper:    把值转换成大写形式")]),s._v(" "),n("li",[s._v("title:    把值中每个单词的首字母都转换成大写")]),s._v(" "),n("li",[s._v("trim:      把值的首尾空格去掉")]),s._v(" "),n("li",[s._v("striptags:    渲染之前把值中所有的HTML标签都删掉")]),s._v(" "),n("li",[s._v("join:      拼接多个值为字符串")]),s._v(" "),n("li",[s._v("replace:      替换字符串的值")]),s._v(" "),n("li",[s._v("round:  默认对数字进行四舍五入，也可以用参数进行控制")]),s._v(" "),n("li",[s._v("int:       把值转换成整型")])]),s._v(" "),n("p",[n("strong",[s._v("那么如何使用这些过滤器呢？ 只需要在变量后面使用管道(|)分割，多个过滤器可以链式调用，前一个过滤器的输出会作为后一个过滤器的输入。")])]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{{ 'abc' | captialize  }}\n# Abc\n \n{{ 'abc' | upper  }}\n# ABC\n \n{{ 'hello world' | title  }}\n# Hello World\n \n{{ \"hello world\" | replace('world','daxin') | upper }}\n# HELLO DAXIN\n \n{{ 18.18 | round | int }}\n# 18\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_3-for循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-for循环"}},[s._v("#")]),s._v(" 3. for循环")]),s._v(" "),n("p",[s._v("jinja2中的for循环用于迭代Python的数据类型，包括列表，元组和字典。在jinja2中不存在while循环。")]),s._v(" "),n("ol",[n("li",[s._v("迭代列表")])]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<ul>\n{% for user in users %}\n<li>{{ user.username|title }}</li>\n{% endfor %}\n</ul>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("2.迭代字典")]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dl>\n{% for key, value in my_dict.iteritems() %}\n<dt>{{ key }}</dt>\n<dd>{{ value }}</dd>\n{% endfor %}\n</dl>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_4-宏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-宏"}},[s._v("#")]),s._v(" 4. 宏")]),s._v(" "),n("p",[s._v("宏类似于Python中的函数，我们在宏中定义行为，还可以进行传递参数，就像Python中的函数一样一样儿的。")]),s._v(" "),n("p",[s._v("在宏中定义一个宏的关键字是macro，后面跟其 宏的名称和参数等")]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{% macro input(name,age=18) %}   # 参数age的默认值为18\n \n <input type=\'text\' name="{{ name }}" value="{{ age }}" >\n \n{% endmacro %}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("调用方法也和Python的类似")]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<p>{{ input('daxin') }} </p>\n<p>{{ input('daxin',age=20) }} </p>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_5-继承和super函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-继承和super函数"}},[s._v("#")]),s._v(" 5. 继承和super函数")]),s._v(" "),n("p",[s._v("jinja2中最强大的部分就是模板继承。模板继承允许我们创建一个基本(骨架)文件，其他文件从该骨架文件继承，然后针对自己需要的地方进行修改。")]),s._v(" "),n("p",[s._v("jinja2的骨架文件中，利用block关键字表示其包涵的内容可以进行修改。")]),s._v(" "),n("p",[s._v("以下面的骨架文件base.html为例：")]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    {% block head %}\n    <link rel="stylesheet" href="style.css"/>\n    <title>{% block title %}{% endblock %} - My Webpage</title>\n    {% endblock %}\n</head>\n<body>\n<div id="content">{% block content %}{% endblock %}</div>\n<div id="footer">\n    {% block  footer %}\n    <script>This is javascript code <\/script>\n    {% endblock %}\n</div>\n</body>\n</html>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("这里定义了四处 block，即：head，title，content，footer。那怎么进行继承和变量替换呢？注意看下面的文件")]),s._v(" "),n("div",{staticClass:"language-jinja line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{% extend \"base.html\" %}       # 继承base.html文件\n \n{% block title %} Dachenzi {% endblock %}   # 定制title部分的内容\n \n{% block head %}\n    {{  super()  }}        # 用于获取原有的信息\n    <style type='text/css'>\n    .important { color: #FFFFFF }\n    </style>\n{% endblock %}   \n \n# 其他不修改的原封不动的继承\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_6-利用jinja2进行渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-利用jinja2进行渲染"}},[s._v("#")]),s._v(" 6. 利用jinja2进行渲染")]),s._v(" "),n("p",[s._v("jinja2模块中有一个名为Enviroment的类，这个类的实例用于存储配置和全局对象，然后从文件系统或其他位置中加载模板。")]),s._v(" "),n("h3",{attrs:{id:"_6-1-基本使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-基本使用方法"}},[s._v("#")]),s._v(" 6.1. 基本使用方法")]),s._v(" "),n("p",[s._v("大多数应用都在初始化的时候撞见一个Environment对象，并用它加载模板。Environment支持两种加载方式：")]),s._v(" "),n("ul",[n("li",[s._v("PackageLoader：包加载器")]),s._v(" "),n("li",[s._v("FileSystemLoader：文件系统加载器")])]),s._v(" "),n("h3",{attrs:{id:"_6-2-packageloader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-packageloader"}},[s._v("#")]),s._v(" 6.2. PackageLoader")]),s._v(" "),n("p",[s._v("使用包加载器来加载文档的最简单的方式如下：")]),s._v(" "),n("div",{staticClass:"language-jinja2 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-jinja2"}},[n("code",[s._v("from jinja2 import PackageLoader,Environment\nenv = Environment(loader=PackageLoader('python_project','templates'))    # 创建一个包加载器对象\n \ntemplate = env.get_template('bast.html')    # 获取一个模板文件\ntemplate.render(name='daxin',age=18)   # 渲染\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("其中：")]),s._v(" "),n("ul",[n("li",[s._v("PackageLoader()的两个参数为：python包的名称，以及模板目录名称。")]),s._v(" "),n("li",[s._v("get_template()：获取模板目录下的某个具体文件。")]),s._v(" "),n("li",[s._v("render()：接受变量，对模板进行渲染")])]),s._v(" "),n("h3",{attrs:{id:"_6-3-filesystemloader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-filesystemloader"}},[s._v("#")]),s._v(" 6.3. FileSystemLoader")]),s._v(" "),n("p",[s._v("文件系统加载器，不需要模板文件存在某个Python包下，可以直接访问系统中的文件。")]),s._v(" "),n("h2",{attrs:{id:"_7-nginx的示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-nginx的示例"}},[s._v("#")]),s._v(" 7. nginx的示例")]),s._v(" "),n("p",[s._v("定义yaml")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("vars")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http_port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web.com\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tasks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" install httpd server\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" present\n  \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" configure httpd server\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("src")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx.conf\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/nginx/nginx.conf\n        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Restart Httpd Server\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" restarted\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("我们使用jinja来配置一下nginx的负载均衡")]),s._v(" "),n("p",[s._v("读取的变量就是yaml中定义的")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("# nginx.conf\nupstream "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" server_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("%  for  i  in  range("),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(")  %"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v("."),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" http_port "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(";\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v("."),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" http_port "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(";\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("%  endfor  %"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" http_port "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(";\n    server_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" server_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      proxy_pass  http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//web.com;")]),s._v("\n      include  proxy_params;\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("在配置文件中就可以使用playbook中定义的变量，我们在配置MySQL主从复制集群的时候，对于my.cnf文件，master主机和slave主机的配置是不同的，这样就可以根据主机名，使用Jinja中的if语法进行条件渲染")]),s._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token header"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("{% if ansible_fqdn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('= "mysql_master" %}')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("log-bin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql-bin")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server-id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n{% else %}\n  "),n("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server-id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("2")]),s._v("\n{% endif %}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这样就完成了配置区分，执行同样的template拷贝命令，在不同的机器上是不同的配置文件。")]),s._v(" "),n("p",[s._v("ansible_fqdn: 这个是gather_facts任务获取的变量，我们也可以使用其他变量进行判断\nmysql_master: 这个是需要配置主从复制的master主机hostname，需要提前设置，也是可以用ansible设置的")])])}),[],!1,null,null,null);a.default=e.exports}}]);