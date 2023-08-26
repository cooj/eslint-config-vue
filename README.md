自己写vue项目的eslint规则...
<p align="center">
😃 😃 😃 
</p>

<h2 align="center">
<a href="https://github.com/cooj/eslint-config-vue">eslint-config-vue</a> 
</h2><br>
<p>
配置一个自己写vue项目的eslint规则，新写一个项目的时候都要去配置eslint，搞起来很繁琐，所以根据自己平时的习惯配置一下吧，以后就直接导入项目就行
</p>

## 随便写点
<p>
这里的规则是在antfu大佬的 <a href="https://www.npmjs.com/package/@antfu/eslint-config" target="_blank">@antfu/eslint-config</a> 的基础上补充自己的规则的,用了一下，感觉还不错，写起来挺舒服的，还有个原因是赖得一个个细化去配置这些规则😂； 
</p>

<!-- 然后写项目会用原子化css，选择了 <a href="https://unocss.dev/" target="_blank">UnoCSS</a> , 规则也是用了 <a href="https://www.npmjs.com/package/@unocss/eslint-config" target="_blank">@unocss/eslint-config</a> -->


<pre>
采用4空格缩进写法，if else写法格式，console.log等
</pre>






## 使用方法
 - 安装（npm、pnpm、yarn）自己项目用的包管理器就行
```bash
pnpm i -D @antfu/eslint-config @cooj/eslint-config-vue
```
 - 配置
```bash
# .eslintrc
    "extends": [
        ...
+      "@antfu/eslint-config",
+      "@cooj/eslint-config-vue"
    ]
```

### vscode配置建议
```json
{
    "prettier.enable": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "editor.tabSize": 4
}
```

