# Hook

[Hook](https://hookproductivity.com/) 是一个效率应用，通过 Deep Link 来连接应用程序。

Taio 增加了基本的 [AppleScript](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) 支持，以便与 Hook 一起工作。

## 获取文档链接

要获得当前文档的链接，请使用如下所示的 AppleScript 脚本：

```
tell application "Taio"
	get url of active document
end tell
```

## 获取文档名称

要获得当前文档的名称，请使用如下所示的 AppleScript 脚本：

```
tell application "Taio"
	get name of active document
end tell
```

> 要了解更多关于 AppleScript 和 Hook 的信息，请参考上面提到的它们的官方文档。