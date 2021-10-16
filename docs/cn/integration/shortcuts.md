# 快捷指令

我们为 Taio 提供了丰富的[快捷指令](https://apps.apple.com/cn/app/id915249334)支持，让您可以在熟悉的工作流中集成 Taio 的功能：

<img src="../cn/integration/assets/IMG_1.png" width="360" />

下面简单介绍几个使用场景，更多关于快捷指令的使用方法，请参考 Apple 提供的[使用手册](https://support.apple.com/zh-cn/guide/shortcuts/welcome/ios)。

如需使用 iOS 内建的辅助功能，例如“轻点背面”，请参考 Apple 提供的[教程](https://support.apple.com/zh-cn/HT211781)。

## 运行动作

可以设定需要运行的动作，并可以指定输入参数：

<img src="../cn/integration/assets/IMG_2.png" width="360" />

这将打开 Taio 应用并启动指定的动作。

## 保存剪贴板

通过简单的设置，可以将剪贴板内容保存至 Taio：

<img src="../cn/integration/assets/IMG_3.png" width="360" />

配合快捷指令的桌面小组件，可以实现在桌面直接保存，无需打开应用。

> 请注意，在某些版本的 iOS（例如 iOS 15.0）上，内置的“剪贴板”变量不起作用。您会看到一个错误，可以使用“获取剪贴板”操作来绕过这个问题。据称，此问题在 iOS 15.1 中得到了修复。

## 获取剪贴内容

此操作返回 Taio 剪贴数据，可以指定全部内容或置顶的内容：

<img src="../cn/integration/assets/IMG_4.png" width="360" />

返回的数据为多条内容，可以使用列表相关的快捷指令操作进行处理。

## 创建文档

通过文本内容，在 Taio 创建文档，可以指定保存在本地或 iCloud 云盘：

<img src="../cn/integration/assets/IMG_5.png" width="360" />

若文件路径不合法，此操作将提示错误。

## 导入文件

向 Taio 目录中导入任意格式的文件，例如图片：

<img src="../cn/integration/assets/IMG_6.png" width="360" />

若文件路径不合法，此操作将提示错误。

> 我们仍在为 Taio 提供更丰富的快捷指令支持，尤其是针对文本处理。