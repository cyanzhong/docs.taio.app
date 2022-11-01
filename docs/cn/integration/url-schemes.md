# URL Schemes

Taio 支持 URL schemes 来启动一些功能，这可以让您的工作流更灵活。

> 如果您的使用场景没有被支持，请让我们知道，我们会不断改进。

## 保存剪贴板

```
taio://clips?action=save
```

## 复制到剪贴板

```
taio://clips?action=copy&text=text
```

## 创建剪贴内容

```
taio://clips?action=new
```

## 清除剪贴内容

```
taio://clips?action=clear
```

> 小心使用这个功能，它会不经过询问即清除所有的剪贴内容。

## 创建新文件

```
taio://editor?action=new
```

也可以指定创建的位置和路径：

```
taio://editor?action=new&path=path&location=0
```

`location` 0：本地文件，1：iCloud 云盘文件。

## 在编辑器中打开文件

```
taio://editor?action=open&path=path&location=0&edit-pos=none
```

`location` 0：本地文件，1：iCloud 云盘文件，2：添加的外部位置。

`edit-pos` none：不开始编辑，beginning：从文件头部开始编辑，end：从文件尾部开始编辑。

当 `path` 是目录时，将在文件管理器中打开该目录。

## 在预览模式下打开文件

对于 Markdown 文件，可以用 `.html` 代替 `.md` 后缀在预览模式下打开它们：

```
taio://editor?action=open&path=Example.html&location=0
```

其他参数的工作方式相同。

## 搜索文件

```
taio://editor?action=search&query=query
```

`query` 可选的初始搜索关键词。

## 搜索标签

搜索指定标签，列出包含该标签的所有文件：

```
taio://editor?action=open&tag=tag
```

## 打开实时便笺

在运行 iOS 16.1 以上的 iPhone 上打开实时便笺：

```
taio://editor?action=live-notes
```

## 打开快捷草稿

```
taio://drafts?edit-pos=none
```

`edit-pos` none：不开始编辑，beginning：从文件头部开始编辑，end：从文件尾部开始编辑。

## 追加内容到文件

```
taio://editor?action=append&path=path&location=0&text=text
```

`location` 0：本地文件，1：iCloud 云盘文件，2：添加的外部位置。

文件不存在时将会自动创建。

与此类似地，若使用参数 `action=overwrite`，则上述文本文件会被覆盖，使用 `action=prepend` 则可以将新内容插入到文件头部。

## 导入动作

```
taio://actions?action=import&url=url
```

当文件比较小时，也可以使用 `data` 来替代 `url`：

```
taio://actions?action=import&data=data
```

`data` 是文件内容，需要被 URL 编码。

也可以导入复制到剪贴板的动作：

```
taio://actions?action=import&data=clipboard
```

## 运行动作

```
taio://actions?action=run&name=name&input=input
```

提供 `input` 作为输入参数时，可通过 `上个结果` 变量获取。

## URL 编码

请注意，URL 参数都需要经过 URL 编码，例如：

```
taio://actions?action=import&url=https%3A%2F%2Ftaio.app%2Fdemo.taioactions
```

上述 `url` 的原始内容是 `https://taio.app/demo.taioactions`（仅作为示例的假链接），若不被 URL 编码，该参数将无法被正确地读取。

## x-callback-url

Taio 支持使用 [x-callback-url](http://x-callback-url.com) 标准来运行动作，例如：

```
taio://x-callback-url/actions?action=run&name=name&x-success=successURL&x-error=errorURL
```

当动作被正确执行之后，`x-success` 将会被打开，输出结果将会被填充到 `taio-output` 参数。反之，`x-error` 将会被打开，错误信息将会被填充到 `taio-error` 参数。

请参考 [x-callback-url](http://x-callback-url.com) 标准以了解更多细节。