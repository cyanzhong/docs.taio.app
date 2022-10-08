# Custom Preview

It's possible to customize preview styles and behaviors using `CSS` and `JavaScript`.

To learn more about CSS and JavaScript, please refer to:

- [Mozilla's CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Customize Styles

Style sheets can be found by going preview settings, custom styles. There're several built-in example style sheets, you can also create your own.

These files are just plain text files located in `/Taio/Templates/PreviewStyles`, adding files there using your favorite source code editor works too.

> Taio automatically manages file sync, it uses iCloud when possible.

### Root Element

The generated HTML uses `<article class="markdown-body"><article/>` as its root element, to control styles inside this element, consider using css selectors like this:

```css
.markdown-body h1 {

}
```

This changes the style of top-level headings in the generated article.

Generally, we will need to cover bunches of selectors to have a complete overwritten, such as `h1`, `h2`, `h3`, `hr`, `blockquote`, `table`, etc. The easiest way to learn what needs to be covered is inspecting a generated HTML file.

### Body Background Color

If possible, try to avoid using translucent background colors on the HTML body.

When generating PDF for HTML with translucent background color, Taio remixes the color to remove the alpha channel, in order to fill the PDF paper background with the same color.

### Quick Switcher

To quickly switch between style sheets in preview mode, long press the preview button (right-click on macOS) and we will see a popup menu.

## Customize Behaviors

The JavaScript file that adds custom behaviors can be found by going preview settings, custom plugins. The default implementation is just a placeholder, and you can change it to match your needs.

This file is just a plain text file located in `/Taio/Templates/PreviewPlugins.js`, editing it using your favorite source code editor works too.

With this JavaScript file, you can add more extensions to the preview.

> Taio automatically manages file sync, it uses iCloud when possible.