# Hook

[Hook](https://hookproductivity.com/) is a productivity app that connects apps by leveraging deep links.

Taio has added basic [AppleScript](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) support to work with Hook.

## Get Document URL

To get the URL of the active document, use AppleScript like below:

```
tell application "Taio"
	get url of active document
end tell
```

## Get Document Name

To get the name of the active document, use AppleScript like below:

```
tell application "Taio"
	get name of active document
end tell
```

> To learn more about AppleScript and Hook, please refer to their official documentations mentioned above.