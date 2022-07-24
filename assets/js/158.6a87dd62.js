(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{628:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、k8s-crd简明及简用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、k8s-crd简明及简用"}},[s._v("#")]),s._v(" 1、K8S CRD简明及简用：")]),s._v(" "),t("p",[t("strong",[s._v("CustomResourceDefinition简介：")]),s._v("\n在 Kubernetes 中一切都可视为资源，Kubernetes 1.7 之后增加了对 CRD 自定义资源二次开发能力来扩展 Kubernetes API，通过 CRD 我们可以向 Kubernetes API 中增加新资源类型，而不需要修改 Kubernetes 源码来创建自定义的 API server，该功能大大提高了 Kubernetes 的扩展能力。")]),s._v(" "),t("p",[s._v("当你创建一个新的CustomResourceDefinition (CRD)时，Kubernetes API服务器将为你指定的每个版本创建一个新的RESTful资源路径，我们可以根据该api路径来创建一些我们自己定义的类型资源。CRD可以是命名空间的，也可以是集群范围的，由CRD的作用域(scpoe)字段中所指定的，与现有的内置对象一样，删除名称空间将删除该名称空间中的所有自定义对象。customresourcedefinition本身没有名称空间，所有名称空间都可以使用。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fkubernetes.io%2Fdocs%2Ftasks%2Faccess-kubernetes-api%2Fcustom-resources%2Fcustom-resource-definitions%2F",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kuberneters 官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_2、通过crd资源创建自定义资源-即自定义一个restful-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、通过crd资源创建自定义资源-即自定义一个restful-api"}},[s._v("#")]),s._v(" 2、通过crd资源创建自定义资源，即自定义一个Restful API：")]),s._v(" "),t("p",[t("code",[s._v("vi resourcedefinition.yaml")])]),s._v(" "),t("div",{staticClass:"language-objectivec line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-objectivec"}},[t("code",[s._v("apiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apiextensions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1beta1\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CustomResourceDefinition\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  # 名称必须与下面的spec字段匹配，格式为"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("plural"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" crontabs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  # 用于REST API的组名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n  # 此CustomResourceDefinition支持的版本列表\n  versions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n      # 每个版本都可以通过服务标志启用"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("禁用。\n      served"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true\n      # 必须将一个且只有一个版本标记为存储版本。\n      storage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true\n  # 指定crd资源作用范围在命名空间或集群\n  scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Namespaced\n  names"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("URL中使用的复数名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("group"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("plural"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),s._v("\n    plural"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" crontabs\n    # 在"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CLI")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("shell界面输入的参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("上用作别名并用于显示的单数名称\n    singular"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" crontab\n    "),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("字段使用驼峰命名规则"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 资源清单使用如此")])]),s._v("\n    kind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CronTab\n    # 短名称允许短字符串匹配CLI上的资源，意识就是能通过kubectl 在查看资源的时候使用该资源的简名称来获取。\n    shortNames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ct\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("ul",[t("li",[s._v("创建自定义contab资源\n"),t("code",[s._v("kubectl create -f resourcedefinition.yaml")]),s._v("\n然后在以下位置创建一个新的带有名称空间的RESTful API端点:\n/apis/stable.example.com/v1/namespaces/*/crontabs/...然后我们可以使用该url来创建和管理自定义对象资源。")]),s._v(" "),t("li",[s._v("查看自定义contab资源的信息\n"),t("code",[s._v("kubectl get contab/ct")])])]),s._v(" "),t("h2",{attrs:{id:"_3、创建自定义资源的对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建自定义资源的对象"}},[s._v("#")]),s._v(" 3、创建自定义资源的对象：")]),s._v(" "),t("p",[s._v("根据crd对象资源创建出来的RESTful API，来创建crontab类型资源对象\n"),t("code",[s._v("vi my-crontab.yaml")])]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("apiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stable.example.com/v1"')]),s._v("\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronTab")]),s._v("\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("object")])]),s._v("\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  cronSpec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"* * * * */5"')]),s._v("\n  image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("awesome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("image\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("在创建CustomResourceDefinition对象之后，我们可以创建定制资源的对象。自定义对象可以包含自定义字段。这些字段可以包含任意JSON。上面的例子中cronSpec和image自定义字段设置在CronTab类型的自定义对象中。CronTab类型来自您在上面创建的CustomResourceDefinition对象的规范。")]),s._v(" "),t("p",[s._v("创建自定义资源contab资源的对象\n"),t("code",[s._v("kubectl create -f my-crontab.yaml")])]),s._v(" "),t("h2",{attrs:{id:"_4、为自定义资源添加验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、为自定义资源添加验证"}},[s._v("#")]),s._v(" 4、为自定义资源添加验证：")]),s._v(" "),t("p",[s._v("validation这个验证是为了在创建好自定义资源后，通过该资源创建对象的时候，对象的字段中存在无效值，则创建该对象的请求将被拒绝，否则会被创建。我们可以在crd文件中添加“validation:”字段来添加相应的验证机制。")]),s._v(" "),t("p",[s._v("我们可以通过使用OpenAPI v3 模式来验证我们自定义的资源对象，使用该模式也应用了一些限制：")]),s._v(" "),t("ul",[t("li",[s._v("default, nullable, discriminator, readOnly, writeOnly, xml, deprecated和$ref不能设置这些字段。")]),s._v(" "),t("li",[s._v("字段uniqueItem不能设置为true")]),s._v(" "),t("li",[s._v("字段additionalProperties不能设置为false")])]),s._v(" "),t("p",[t("strong",[s._v("当然我们可以通过修改kube-apiserver.yml文件来去限制，将kube-apiserver.yml文件中的cusstomresourcevalidation设置为false(--feature-gates=CustomResourceValidation=false)")])]),s._v(" "),t("p",[t("strong",[s._v("例子如下：")]),s._v("\n在crd资源中对自定义资源应用openapi v3模式验证，该自定义资源中对cronSpec和replicas两个字段做了验证，不符合规则的不给予创建该资源对象。")]),s._v(" "),t("p",[t("code",[s._v("vi resourcedefinition.yaml")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("apiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  name: crontabs.stable.example.com\nspec:\n  group: stable.example.com\n  versions:\n    - name: v1\n      served: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      storage: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  version: v1\n  scope: Namespaced\n  names:\n    plural: crontabs\n    singular: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v("\n    kind: CronTab\n    shortNames:\n    - ct\n  validation:\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# openAPIV3Schema is the schema for validating custom objects.")]),s._v("\n    openAPIV3Schema:\n      properties:\n        spec:\n          properties:\n            cronSpec: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--必须是字符串，并且必须是正则表达式所描述的形式")]),s._v("\n              type: string\n              pattern: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$'")]),s._v("\n            replicas: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#----必须是整数，最小值必须为1，最大值必须为10")]),s._v("\n              type: integer\n              minimum: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n              maximum: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v("创建含有验证的自定义资源(Contab)\n"),t("code",[s._v("kubectl create -f resourcedefinition.yaml")])]),s._v(" "),t("p",[s._v("创建不符合验证规则的contab资源对象：\n"),t("code",[s._v("vi my-crontab.yaml")])]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("apiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stable.example.com/v1"')]),s._v("\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronTab")]),s._v("\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("object")])]),s._v("\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  cronSpec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"* * * *"')]),s._v("\n  image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("awesome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("image")]),s._v("\n  replicas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("创建不符合验证规则的contab资源对象\n"),t("code",[s._v("kubectl create -f my-crontab.yaml")]),s._v("\n*"),t("strong",[s._v("结果是该Contab资源对象创建失败*")])]),s._v(" "),t("h2",{attrs:{id:"_5、为自定义资源添加额外的打印列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、为自定义资源添加额外的打印列"}},[s._v("#")]),s._v(" 5、为自定义资源添加额外的打印列：")]),s._v(" "),t("p",[s._v("从Kubernetes 1.11开始，kubectl使用服务器端打印。服务器决定由kubectl get命令显示哪些列即在我们获取一个内置资源的时候会显示出一些列表信息(比如：kubectl get nodes)。这里我们可以使用CustomResourceDefinition自定义这些列，当我们在查看自定义资源信息的时候显示出我们需要的列表信息。通过在crd文件中添加“additionalPrinterColumns:”字段，在该字段下声明需要打印列的的信息。\n例如：\n这里我们在crd对象中为自定义资源添加要显示的列表信息：\n$ vi resourcedefinition.yaml：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("apiVersion: apiextensions.k8s.io/v1beta1\n  kind: CustomResourceDefinition\n  metadata:\n    name: crontabs.stable.example.com\n  spec:\n    group: stable.example.com\n    version: v1\n    scope: Namespaced\n    names:\n      plural: crontabs\n      singular: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v("\n      kind: CronTab\n      shortNames:\n      - ct\n    additionalPrinterColumns:\n    - name: Spec\n      type: string\n      description: The "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" spec defining the interval a CronJob is run\n      JSONPath: .spec.cronSpec\n    - name: Replicas\n      type: integer\n      description: The number of "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" launched by the CronJob\n      JSONPath: .spec.replicas\n    - name: Age\n      type: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n      JSONPath: .metadata.creationTimestamp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("创建含有显示列表信息的自定义资源\n"),t("code",[s._v("kubectl create -f resourcedefinition.yaml")])]),s._v(" "),t("p",[s._v("创建contab自定义资源对象\n"),t("code",[s._v("kubectl create -f my-crontab.yaml")])]),s._v(" "),t("p",[s._v("查看自定义资源对象基本信息\n"),t("code",[s._v("kubectl get crontab my-new-cron-object")])]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("NAME                       SPEC        REPLICAS   AGE\nmy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("object")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         7s\n注意：name列不需要定义默认会有的\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_6、为自定义的资源添加状态和伸缩配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、为自定义的资源添加状态和伸缩配置"}},[s._v("#")]),s._v(" 6、为自定义的资源添加状态和伸缩配置：")]),s._v(" "),t("p",[s._v("一般我们要是没有在自定义资源当中配置关于资源对象的伸缩和状态信息的一些相关配置的话，那么在当我们通过该自定义资源创建对象后，又想通过“kubectl scale”来弹性的扩展该对象的容器的时候就会无能为力。而CRD可以允许我们添加该方面的相关配置声明，从而达到我们可以对自定义资源对象的伸缩处理。添加“ subresources:”字段来声明状态和伸缩信息。\n"),t("strong",[s._v("在k8s中这个称为子资源，我们可以通过“kube-apiserver.yml”文件来关闭或启用该功能，“--feature-gates=CustomResourceSubresources=false”。")])]),s._v(" "),t("p",[t("strong",[s._v("注意：在CRD OpenAPI验证模式的根目录中，只允许以下结构在crd文件中出现：\nDescription、Example、ExclusiveMaximum、ExclusiveMinimum、ExternalDocs、Format、Items、Maximum、MaxItems、MaxLength、Minimum、MinItems、MinLength、MultipleOf、Pattern、Properties、Required、Title、Type、UniqueItems")])]),s._v(" "),t("p",[s._v("如下crd文件中同时申明status和scale子资源：\n"),t("code",[s._v("vi resourcedefinition.yaml")])]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("apiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apiextensions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("v1beta1")]),s._v("\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomResourceDefinition")]),s._v("\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("crontabs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com")]),s._v("\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com")]),s._v("\n  versions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("v1")]),s._v("\n      served"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("true")]),s._v("\n      storage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("true")]),s._v("\n  scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Namespaced")]),s._v("\n  names"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    plural"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("crontabs")]),s._v("\n    singular"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("crontab")]),s._v("\n    kind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronTab")]),s._v("\n    shortNames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ct\n  "),t("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("# 自定义资源的子资源的描述")]),s._v("\n  subresources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("# 启用状态子资源。")]),s._v("\n    status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("# 启用scale子资源")]),s._v("\n    scale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      specReplicasPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("spec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("replicas")]),s._v("\n      statusReplicasPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("replicas")]),s._v("\n      labelSelectorPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("labelSelector\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("创建含有子资源声明的自定义资源\n"),t("code",[s._v("kubectl create -f resourcedefinition.yaml")])]),s._v(" "),t("p",[s._v("创建自定义资源对象\n"),t("code",[s._v("kubectl create -f my-crontab.yaml")])]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("apiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stable.example.com/v1"')]),s._v("\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronTab")]),s._v("\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("object")])]),s._v("\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  cronSpec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"* * * * */5"')]),s._v("\n  image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("awesome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cron"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("image")]),s._v("\n  replicas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("扩充自定义资源对象副本数目\n"),t("code",[s._v("kubectl scale --replicas=5 crontabs/my-new-cron-object")])]),s._v(" "),t("h2",{attrs:{id:"_7、为自定义资源分配所属组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、为自定义资源分配所属组"}},[s._v("#")]),s._v(" 7、为自定义资源分配所属组：")]),s._v(" "),t("p",[s._v("一般的我们在创建完自定义资源的时候该资源就是一个分组，为了减少分组信息，我们可以将自定义资源分配到对应已存在的组里面。通过“categories:”字段来定义我们自定义资源所属的组。在crd文件中添加”categories:“字段来声明所属组。")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("apiVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apiextensions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("v1beta1")]),s._v("\nkind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomResourceDefinition")]),s._v("\nmetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("crontabs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com")]),s._v("\nspec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com")]),s._v("\n  versions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("v1")]),s._v("\n      served"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("true")]),s._v("\n      storage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("true")]),s._v("\n  scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Namespaced")]),s._v("\n  names"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    plural"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("crontabs")]),s._v("\n    singular"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("crontab")]),s._v("\n    kind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CronTab")]),s._v("\n    shortNames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ct\n    "),t("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("# categories字段指定自定义资源所属的组")]),s._v("\n    categories"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("创建完上面的crd资源以及资源对象my-crontab后我们就可以通过获取all组来获取该组下的信息\n"),t("code",[s._v("kubectl get all")])])])}),[],!1,null,null,null);a.default=e.exports}}]);