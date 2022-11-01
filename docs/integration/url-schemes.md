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

## Create New Clipping

```
taio://clips?action=new
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
taio://editor?action=open&path=path&location=0&edit-pos=none
```

`location` 0: local files, 1: iCloud Drive files, 2: Added external locations.

`edit-pos` none: don't start editing, beginning: start editing from the beginging, end: start editing from the end.

It opens the folder in file explorer when `path` is a folder.

## Open A File in Preview Mode

For Markdown files, you can open them in preview mode by replacing `.md` suffix with `.html`:

```
taio://editor?action=open&path=Example.html&location=0
```

Other parameters work the same way.

## Search Files

```
taio://editor?action=search&query=query
```

`query` optional search term to start the search.

## Search Tags

Search for a given tag, list all files containing that tag:

```
taio://editor?action=open&tag=tag
```

## Open Live Notes

Open Live Notes on iPhone running iOS 16.1 and higher:

```
taio://editor?action=live-notes
```

## Open Quick Drafts

```
taio://drafts?edit-pos=none
```

`edit-pos` none: don't start editing, beginning: start editing from the beginging, end: start editing from the end.

## Append Text to File

```
taio://editor?action=append&path=path&location=0&text=text
```

`location` 0: local files, 1: iCloud Drive files, 2: Added external locations.

The file will be created automatically if it does not exist.

Similarly, you can use parameter `action=overwrite` to overwrite an existing file, and use parameter `action=prepend` to insert text into the begining of a file.

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

If `input` is passed in as an input parameter, it can be retrieved by the `Last Value` variable.

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