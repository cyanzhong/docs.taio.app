## Wiki Links

In addition to Markdown links supported natively like `[Title](link)`, Taio also has built-in support for wiki links like `[[File Name]]`.

> It is used to link an internal document, rather than referring to a remote resource, like webpage.

## File Locating

A wiki link can be either relative path or absolute path.

When an absolute path is used, such as `[[Folder Name/File Name]]`, it points directly to `./Folder Name/File Name.md` (or .txt depends on the existence).

When a relative path is used, such as `[[File Name]]`, it searches the entire folder recursively and uses the best match.

## File Anchor

We can also specify an anchor in the link, like `[[File Name#Heading]]`.

When we open the file, it scrolls to the heading automatically.

## Display Title

By default, the link in generated HTML uses the file name as its display title.

If we prefer to provide an explicit display title, like we can in Markdown links, the syntax is `[[File Name|Display Title]]`.

## Embedding Files

Similar to Markdown syntax, where we use `![](link)` to embed an image, we can also embed files with wiki links, simply put a `!` (exclamation mark) before the link: `![[Image.png]]`.

> Commonly used image formats are all supported, such as `png`, `jpg`, `gif`, etc.

For Markdown files or plain text files, they can also be embedded using this syntax. For instance, `![[File Name]]` would embed its content into the current file, and it can be inline previewed.