# h1-sawayaka

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple web component to display a "sawayaka" (refreshing) animated gradient effect on your heading tags.

## Demo

- https://code4fukui.github.io/h1-sawayaka/

The demo shows heading text with a smoothly animating gradient that shifts between blue, pink, and orange.

## Features

- **Zero-dependency Web Component:** Easy to drop into any project.
- **Provides `<h1-sawayaka>` and `<h2-sawayaka>`:** Custom elements for your headings.
- **Animated Gradient:** Applies a smooth, looping gradient animation to the text.
- **CSS-Customizable:** Style the elements with standard CSS.

## Usage

Simply import the JavaScript module and use the custom tags in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/h1-sawayaka/h1-sawayaka.js"></script>

<h1-sawayaka>Sawayaka H1</h1-sawayaka>
<h2-sawayaka>Sawayaka H2</h2-sawayaka>
```

## Customization

You can override the default styles, such as `font-size`, using CSS.

```css
h1-sawayaka {
  font-size: 300%;
}

h2-sawayaka {
  font-weight: normal;
}
```

## Credit

The CSS gradient and animation effect is based on the work from [jigintern/SAWAYAKA-COMMUNICATION](https://github.com/jigintern/SAWAYAKA-COMMUNICATION).

## License

MIT License