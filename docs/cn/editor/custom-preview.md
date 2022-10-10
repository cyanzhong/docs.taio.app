# 自定义预览

Taio 可以使用 `CSS` 和 `JavaScript` 来定制预览的样式和行为。

要了解更多关于 CSS 和 JavaScript 的信息，请参考：

- [Mozilla 的 CSS 指南](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Mozilla 的 JavaScript 指南](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 自定义样式

样式表可以在预览设置、自定义样式找到。Taio 内置了几个样式表的例子，您也可以创建自己的。

这些文件是纯文本文件，位于 `/Taio/Templates/PreviewStyles`，使用您喜欢的源代码编辑器在那里添加文件也可以。

> Taio 自动管理文件同步，它在可能的时候使用 iCloud 同步。

### 根元素

生成的 HTML 使用 `<article class="markdown-body"><article/>` 作为它的根元素，想要控制这个元素的样式，可以考虑使用像这样的 css 选择器：

```css
.markdown-body h1 {

}
```

这将改变生成的文章中顶级标题的样式。

一般来说，我们需要考虑大量的选择器来进行完整的覆盖，如 `h1`、`h2`、`h3`、`hr`、`blockquote`、`table` 等。了解需要覆盖的内容最简单方法是检查生成的 HTML 文件。

### 正文背景颜色

如果可能的话，尽量避免在 HTML body 上使用半透明的背景色。

当为带有半透明背景的 HTML 生成 PDF 时，Taio 会重新混合前景色和背景色并删除 alpha 通道，以便用相同的颜色填充 PDF 纸张的背景。

这会尽力还原初始的颜色，但并不保证总是成功。

### 快速切换器

要在预览模式下快速切换样式表，长按预览按钮（在 macOS 上右键），我们将看到一个弹出菜单。

> 在运行 iPadOS 16 或更高版本的 iPad 上，您也可以利用可定制的工具栏来切换样式。

## 自定义行为

添加自定义行为的 JavaScript 文件可以通过预览设置、自定义脚本找到。默认的实现只是一个占位符，您可以根据需要来改变它。

这个文件是一个纯文本文件，位于 `/Taio/Templates/PreviewPlugins.js`，使用您喜欢的源代码编辑器编辑它也可以。

通过这个 JavaScript 文件，您可以为预览添加更多的扩展。

> Taio 自动管理文件同步，它在可能的时候使用 iCloud 同步。