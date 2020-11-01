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

## 创建新文件

```
taio://editor?action=new
```

## 在编辑器中打开文件

```
taio://editor?action=open&path=path&location=0
```

`location` 0：本地文件，1：iCloud 云盘文件。

## 导入动作

```
taio://actions?action=import&url=url
```

## 运行动作

```
taio://actions?action=run&name=name&input=input
```

## URL 编码

请注意，URL 参数都需要经过 URL 编码，例如：

```
taio://actions?action=import&url=https%3A%2F%2Ftaio.app%2Fdemo.taioactions
```

上述 `url` 的原始内容是 `https://taio.app/demo.taioactions`（仅作为示例的假链接），若不被 URL 编码，该参数将无法被正确地读取。