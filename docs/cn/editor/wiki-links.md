## Wiki 链接

除了像 `[Title](link)` 这样原生支持的 Markdown 链接外，Taio 还内置了对 `[[文件名]]` 这样 wiki 链接的支持。

> 它是用来链接内部文件的，而不是引用一个远程资源，如网页。

## 文件定位

Wiki 链接可以是相对路径或绝对路径。

当使用绝对路径时，例如 `[[目录名/文件名]]`，它直接指向 `./目录名/文件名.md`（或 .txt，取决于是否存在）。

当使用相对路径时，例如 `[[文件名]]`，它会递归地搜索整个目录，并使用最佳的匹配结果。

## 文件锚点

我们也可以在链接中指定一个锚点，如 `[[文件名#标题]]`。

当我们打开文件时，它会自动滚动到标题。

## 显示标题

默认情况下，生成的 HTML 中的链接使用文件名作为其显示标题。

如果我们偏好提供一个明确的显示标题，就像我们在 Markdown 链接中可以做到的一样，语法是 `[[文件名|显示标题]]`。

## 内嵌文件

类似于 Markdown 语法中我们用 `![](link)` 来内嵌图片，我们也可以用 wiki 链接来内嵌文件，只需在链接前加一个 `!`（感叹号）即可：`![[Image.png]]`。

> 支持常用的图片格式，如 `png`、`jpg`、`gif` 等。

对于 Markdown 文件或纯文本文件，也可以用这种语法内嵌。例如，`![[文件名]]` 会将其内容嵌入到当前文件中，可以被直接预览。