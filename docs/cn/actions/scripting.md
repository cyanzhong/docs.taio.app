# 进阶脚本编程

Taio 提供了对运行 JavaScript 的全面支持。更重要的是，JavaScript 运行时由 [JSBox 应用](https://apps.apple.com/cn/app/id1312014438) 提供支持，这意味着您可以使用 JSBox 提供的所有模块，例如创建**自定义用户界面**、访问**日历**和**提醒事项**等。

关于 JavaScript 编程语言，可以参考一些知名教程，比如 [javascript.info](https://javascript.info/)。

关于 JSBox 模块的使用细节，请参考 [JSBox 文档](https://docs.xteko.com/#/)。

## 运行 JavaScript

要在 Taio 中使用 JavaScript，只需添加一个名为 `运行 JavaScript` 的操作，然后在编辑器中编写 JavaScript 代码。

代码编辑器功能全面，提供语法高亮和自动补全，也可以通过点击 `全屏编辑器` 选项将其展开至全屏模式。

## 开发复杂的脚本

通常来说，使用 Taio 的脚本编辑器来开发脚本已经足够好，因为它提供了语法高亮和自动完成等功能。

然而对于大型项目来说，一个更好的环境会让您开发更轻松。在这种情况下，我们推荐使用 [JSBox](https://apps.apple.com/cn/app/id1312014438) 作为开发环境，它提供了一个 [VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=Ying.jsbox)，让您可以在电脑上开发，并直接在设备上运行代码。

更妙的是，您可以在开发过程中把代码分成多个模块，并通过把它们打包到一个文本动作文件来进行部署，请参考我们的示例项目 [tldraw](https://github.com/cyanzhong/tldraw/tree/main/apps/jsbox)。

## $actions

除了默认的模块（如 `$http` 和 `$ui`），Taio 还特别提供了 `$actions` 模块。通过这个模块，您可以很容易地操作动作的输入和输出。

## $actions.inputValue

从上个动作中获取当前值：

```js
const inputValue = $actions.inputValue;
```

## $actions.getVar(name)

用名字获取一个变量，变量可以由“设置变量”动作来提供：

```js
const value = $actions.getVar("value");
```

## $actions.setVar(name, value)

使用名字和值设置变量，效果和“设置变量”动作一致：

```js
$actions.setVar("name", "value");
```

## $actions.resolve(value)

用一个输出值完成当前的 JavaScript 动作：

```js
$actions.resolve("value");
```

输出值将被传递到下一个动作。

## $actions.reject(error)

用一个错误信息完成当前的 JavaScript 动作：

```js
$actions.reject("Failed to run JavaScript.");
```

错误信息会以警报的形式出现，并立即停止执行。

## $actions.finish()

立即停止运行，随后的操作将被忽略：

```js
$actions.finish();
```

这个方法不会产生错误，仅会静默地结束运行。

## $actions.restart()

重新运行当前正在运行的动作：

```js
$actions.restart();
```