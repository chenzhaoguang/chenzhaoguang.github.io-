(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{482:function(s,n,a){"use strict";a.r(n);var e=a(2),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[s._v("前言")]),s._v(" "),a("ul",[a("li",[s._v("把本地的开发环境映射到外网，这是我们经常会碰到的一个要求，比方说展示给别人看啦，临时测试啦。尤其在微信开发中，因为微信必须要求80端口，所以不转发的情况下，我们只能把代码部署到服务器之后才能验证测试，非常麻烦。")]),s._v(" "),a("li",[s._v("最早的时候是花生壳，不过这家公司贼恶心。。后面开始用ngrok，然后现在又有了frp，相比来说frp的配置要更简单一点。")]),s._v(" "),a("li",[s._v("因为没有找到合适的docker镜像，所以在参考很多之后，就有了如下自写的image及compose")])]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[s._v("准备工作")]),s._v(" "),a("ul",[a("li",[s._v("具有外网ip的服务器")]),s._v(" "),a("li",[s._v("域名")])]),s._v(" "),a("blockquote",[a("p",[s._v("我这里是准备了一个子域名，*.frp.keepjs.com，把这这个域名解析到服务器，这样可以支持同时映射多个域名到外网，具体的子域名在frp客户端配置，服务端配置前缀域名为frp.keepjs.com")])]),s._v(" "),a("ul",[a("li",[s._v("docker")])]),s._v(" "),a("blockquote",[a("p",[s._v("需要注意的是，我这里是基于ngin-proxy镜像来解析域名的，此处不再赘述，可参照之前的文章："),a("a",{attrs:{href:"https://www.keepjs.com/2018/02/28/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAwordpress/",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用docker搭建wordpress"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"docker-file"}},[s._v("docker file")]),s._v(" "),a("blockquote",[a("p",[s._v("镜像已经上传到docker的hub上了，所以你也可以跳过docker file直接使用compose")])]),s._v(" "),a("p",[s._v("创建工作目录：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" frp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" frp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" frp_image "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" frp_image\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("先创建一个frp的默认配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" conf/frps.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("把以下内容填入 frps.ini：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[common]\nbind_addr = 0.0.0.0\nbind_port = 7000\nkcp_bind_port = 7000\nvhost_http_port = 80\nvhost_https_port = 443\ndashboard_addr = 0.0.0.0\ndashboard_port = 7500\ndashboard_user = admin\ndashboard_pwd = admin\nauthentication_timeout = 0\nsubdomain_host = frp.keepjs.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("创建dockerfile：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" dockerfile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("把以下内容填入dockerfile：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("FROM ubuntu\nMAINTAINER thyiad <1520583107@qq.com>\n\nARG FRP_VERSION=0.16.0\n\nRUN apt update \\\n    && apt install -y wget\n\nWORKDIR /tmp\nRUN set -x \\\n    && wget https://github.com/fatedier/frp/releases/download/v${FRP_VERSION}/frp_${FRP_VERSION}_linux_amd64.tar.gz \\\n    && tar -zxf frp_${FRP_VERSION}_linux_amd64.tar.gz \\\n    && mv frp_${FRP_VERSION}_linux_amd64 /var/frp \\\n    && mkdir -p /var/frp/conf \\\n    && apt remove -y wget \\\n    && apt autoremove -y \\\n    && rm -rf /var/lib/apt/lists/*\n\nCOPY conf/frps.ini /var/frp/conf/frps.ini\n\nVOLUME /var/frp/conf    # conf被配置成了卷，方便以后修改frps.ini\n\nWORKDIR /var/frp\nENTRYPOINT ./frps -c ./conf/frps.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("这个dockerfile执行了以下操作：")]),s._v(" "),a("ul",[a("li",[s._v("从github上下载frp的release版本")]),s._v(" "),a("li",[s._v("解压")]),s._v(" "),a("li",[s._v("从conf目录中读取替换默认的frps.ini")])]),s._v(" "),a("p",[s._v("此时就可以使用docker build命令进行编译镜像了，命令为：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker build -t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"thyiad/my-frp"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker-compose"}},[s._v("docker compose")]),s._v(" "),a("blockquote",[a("p",[s._v("在镜像编译好后，我们就可以开始compose文件了，毕竟compose比直接docker run要方便的多")])]),s._v(" "),a("p",[s._v("创建工作目录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir /usr/frp/frp_compose && cd /usr/frp/frp_compose\nvim docker-compose.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("把以下内容填入docker-compose.yml：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("version: '3'\n\nservices:\n  frp:\n    image: thyiad/my-frp:latest\n    container_name: my-frp\n    ports:\n      - \"7000:7000\"\n      - \"7500:7500\"\n    expose:\n      - 80\n      - 443\n    volumes:\n      - frp_conf:/var/frp/conf\n    restart: always\n    environment:\n      VIRTUAL_HOST: '*.frp.keepjs.com,frp.keepjs.com'   # 指定需要绑定的域名\n\nvolumes:\n    frp_conf:\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy # 此处的nginx-proxy为之前创建的docker network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("运行我们的compose：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时，我们的frp服务器就已经OK了。\n我们访问一下test.frp.keepjs.com试试：\n"),a("img",{attrs:{src:"https://static.yirenyian.com/blog/frp-unvisible.png",alt:""}}),s._v("\n显然，frp已经在运转了，只是该域名并没有绑定转发")]),s._v(" "),a("h2",{attrs:{id:"frp客户端"}},[s._v("frp客户端")]),s._v(" "),a("p",[s._v("服务端搭好之后，我们就可以下载客户端进行使用了。需要前往frp的github上下载对应的版本，我这里是16.0，windows x64。")]),s._v(" "),a("p",[s._v("下载解压后，我们修改frpc.ini为以下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[common]\nserver_addr = 你的服务器ip\nserver_port = 7000\n# protocol = kcp\n\n[web]\ntype = http\nlocal_port = 52485\nsubdomain = test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后打开cmd，运行frpc：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /d d:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("frp\nfrpc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("此时会出现以下界面：\n"),a("img",{attrs:{src:"https://static.yirenyian.com/blog/frp-running.png",alt:""}})]),s._v(" "),a("p",[s._v("说明已经连接成功了，我们再来访问test.frp.keepjs.com试试：\n"),a("img",{attrs:{src:"https://static.yirenyian.com/blog/frp-visible.png",alt:""}})]),s._v(" "),a("p",[s._v("此时，我们的frp就已经搭建好了，很简单吧？")]),s._v(" "),a("blockquote",[a("p",[s._v("ngrok的服务器搭建在这里：\n"),a("a",{attrs:{href:"https://www.keepjs.com/2018/03/01/%E4%BD%BF%E7%94%A8docker%E6%90%AD%E5%BB%BAngrok%E6%9C%8D%E5%8A%A1%E5%99%A8/",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用docker搭建ngrok服务器"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("以上文件已经上传到github：\n"),a("a",{attrs:{href:"https://github.com/Thyiad/docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Thyiad/docker"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=r.exports}}]);