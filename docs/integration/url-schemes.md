# URL Schemes

Taio supports launching functionalities using URL schemes, which can make your workflow more flexible.

> If your scenario is not supported, please let us know and we can improve.

## Save Clipboard

```
taio://clips?action=save
```

## Copy to Clipboard

```
taio://clips?action=copy&text=text
```

## Clear All Clips

```
taio://clips?action=clear
```

> Be careful with this, it clears all clips without asking for confirmation.

## Create A New File

```
taio://editor?action=new
```

Path and location can also be specified:

```
taio://editor?action=new&path=path&location=0
```

`location` 0: local files, 1: iCloud Drive files.

## Open A File in The Editor

```
taio://editor?action=open&path=path&location=0
```

`location` 0: local files, 1: iCloud Drive files.

## Append Text to File

```
taio://editor?action=append&path=path&location=0&text=text
```

`location` 0: local files, 1: iCloud Drive files.

The file will be created automatically if it does not exist.

## Import Actions

```
taio://actions?action=import&url=url
```

When the file is quite small, you can also use `data` instead of `url`:

```
taio://actions?action=import&data=data
```

`data` is the file content, it should be URL encoded.

It can also import actions copied to the clipboard:

```
taio://actions?action=import&data=clipboard
```

## Run Actions

```
taio://actions?action=run&name=name&input=input
```

## URL Encoding

Note that, URL parameters should be URL encoded, for example:

```
taio://actions?action=import&url=https%3A%2F%2Ftaio.app%2Fdemo.taioactions
```

The original text for `url` is `https://taio.app/demo.taioactions` (It's a pseudo link just for example), without URL encoding, the parameter will not be correctly extracted.

## x-callback-url

Taio supports [x-callback-url](http://x-callback-url.com) standard for running actions, for example:

```
taio://x-callback-url/actions?action=run&name=name&x-success=successURL&x-error=errorURL&x-cancel=cancelURL
```

When actions finish running without errors, `x-success` will be opened, the output value will be added as `taio-output`. Otherwise, `x-error` will be opened, the error message will be added as `taio-error`.

For details, please refer to the [x-callback-url](http://x-callback-url.com) specification.