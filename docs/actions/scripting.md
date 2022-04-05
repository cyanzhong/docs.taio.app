# Advanced Scripting

Taio provides full-fledged support for running JavaScript in actions. More importantly, the JavaScript runtime is powered by the [JSBox app](https://apps.apple.com/us/app/id1312014438), which means you can use all modules provided by JSBox, such as creating **custom user interface**, accessing **calendars** and **reminders**, etc.

For details about the JavaScript programming language, refer to some well-known tutorials like [javascript.info](https://javascript.info/).

For details about using JSBox modules, refer to the [JSBox documentation](https://docs.xteko.com/#/en/).

## Run JavaScript

To use JavaScript in Taio, simply add an action called `Run JavaScript` and write JavaScript code in the editor.

The code editor is powerful that provides syntax highlighting and auto completion, you can also expand it to full screen mode by tapping on the `Full Editor` option.

## Developing Complicated Scripts

It is usually good to develop scripts using Taio's script editor, since it provides syntax highlighting and auto completion.

However, it would be great to have a nicer environment for larger projects. In such case, we recommend you to use [JSBox](https://apps.apple.com/us/app/id1312014438) as the development environment, it offers a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Ying.jsbox), with which you can develop scripts on your desktop and run the code directly on your device.

Even better, you can split your code into modules during development, and deploy by bundling them into a single text action, take a look our demo project [tldraw](https://github.com/cyanzhong/tldraw/tree/main/apps/jsbox).

## $actions

Other than default modules (like `$http`, `$ui`), there's a `$actions` module for Taio. With this module, you can manipulate input and output for actions easily.

## $actions.inputValue

Get the current value from the previous action:

```js
const inputValue = $actions.inputValue;
```

## $actions.getVar(name)

Get a variable using its name, the variable can be set using the `Set Variable` action:

```js
const value = $actions.getVar("value");
```

## $actions.setVar(name, value)

Set a variable using name and value, same as running the `Set Variable` action:

```js
$actions.setVar("name", "value");
```

## $actions.resolve(value)

Finish the current JavaScript action with an output value:

```js
$actions.resolve("value");
```

The output value will be sent to the next action.

## $actions.reject(error)

Finish the current JavaScript action with an error:

```js
$actions.reject("Failed to run JavaScript.");
```

The error message will be presented as an alert, and the execution will be stopped immediately.

## $actions.finish()

Stop running immediately, the following actions will be ignored:

```js
$actions.finish();
```

This method doesn't generate an error, it finishes running silently.

## $actions.restart()

Restart the current running actions:

```js
$actions.restart();
```