# 编辑器

Taio 提供的编辑器 100% 实现了 [CommonMark](https://commonmark.org/) 和 [GitHub Flavored](https://github.github.com/gfm/) 标准，使用公开的格式和文件系统，让您在所有其他应用中都能拥有一致的体验。

此外，编辑器支持自定义动作来实现文本处理流程，完全解锁编辑器的扩展能力。

有关于 Markdown 语法的使用，请查看应用内的简介，或其他[说明文档](https://daringfireball.net/projects/markdown/syntax)。

## 工具栏

编辑器工具栏为 Markdown 格式提供了更多方便，它支持常用的 Markdown 语法，让您不再需要手动输入一些繁琐的符号：

<img src="../cn/quick-start/assets/IMG_5.png" width="360" />

工具栏会智能地判断当前的选中区域，例如：光标所在区域是一个标题时，您无需精确地选中这个标题。选中一段文本后按加粗，加粗符号会将选中的文本包裹住。诸如此类的优化还有很多，我们鼓励您多尝试，获得最适合自己的使用方法。

在 Mac 上，当您选中一些文本或点击编辑区时，工具栏会动态显示：

<img src="../cn/quick-start/assets/IMG_18.png" width="540" />

## 手势操作

除了通过 `左右滑动` 来移动光标位置、`双指缩放` 来调节大小以外，您还可以通过 `轻点屏幕三下` 来快速选中当前的段落：

<img src="../cn/quick-start/assets/IMG_6.png" width="360" />

同样的操作也可以使用别的方式完成，但方便的手势操作能让编辑更快捷。

## 快捷短语

相比于很多编辑器支持的快捷短语，Taio 提供可被动态配置的短语内容，例如当前的日期或是剪贴板：

<img src="../cn/quick-start/assets/IMG_7.png" width="360" /> <img src="../cn/quick-start/assets/IMG_8.png" width="360" />

在 Mac 上，您可以右击鼠标来插入片段：

<img src="../cn/quick-start/assets/IMG_19.png" width="540" />

您可以自由地通过模板文本设置快捷短语，来实现更灵活的快速文本插入。

> 小提示：Taio 也支持基于 [TextExpander](https://textexpander.com/) 的文本替换功能。

## 大纲和导出

Taio 会自动提取文档中的各级标题，生成大纲视图，轻点标题可以在文档中快速跳转到相应位置：

<img src="../cn/quick-start/assets/IMG_9.png" width="360" />

在这个页面点左上角的分享按钮，可以将文档以各种常见的格式导出：

<img src="../cn/quick-start/assets/IMG_10.png" width="360" />

## 文本动作

轻点右上角的 ⚡️ 按钮，即可在编辑器使用动作：

<img src="../cn/quick-start/assets/IMG_11.png" width="360" />

> 小提示：如果您在使用 iPad，也可以通过快捷键完成操作（按住 ⌘ 键即可获得提示）。

## 支持的扩展

我们正在为 Markdown 预览提供自定义模板的支持，让您可以显示任何自定义的格式。

在此之前，我们也为 Taio 内置了一些常用的语法扩展：

- [Highlightjs](https://highlightjs.org/)
- [MathJax](https://www.mathjax.org/)
- [Sequence Diagrams](https://bramp.github.io/js-sequence-diagrams/)
- [Flowchart](https://flowchart.js.org/)
- [Mermaid](https://mermaid-js.github.io/mermaid/#/)
- [PlantUML](https://plantuml.com/)

这些扩展可以让您在 Markdown 中高亮代码、显示数学公式和流程图等，查看[数学公式](cn/editor/math.md)和[绘制图表](cn/editor/diagrams.md)了解如何使用。请参考各自的文档获取更多信息。