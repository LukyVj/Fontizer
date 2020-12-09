# Fontizer

## Small react helper to let users handle your fonts display

### Demo

![](https://github.com/LukyVj/fontizer-site/blob/main/public/fontizer-demo.gif?raw=true)

### How to use it

Install the package

`yarn add fontizer`

Prepare your CSS file, by adding these base values to your CSS :root element

```css
--base-font-size: 16px;
--base-font-weight: 300;
```

Then load Fontizer on your page, it can take 2 props, the position one that will position it. And a callback function that returns the new values in an array [16, 300]

```javascript
import { Fontizer } from "fontizer";

<Fontizer
  position="bl"
  callback={(value) => console.log(`values changed ${value}`)}
/>;
```

### Props

| prop     | type     | value                        | default | description                                                               |
| -------- | -------- | ---------------------------- | ------- | ------------------------------------------------------------------------- |
| position | string   | 'bl' \| 'br' \| 'tl' \| 'tr' | bl      | corner coordinates to position your Fontizer button/panel                 |
| callback | Function | any javascript function      | null    | Pass a function using the callback returned value, happen on each updates |

### A sprinkle of CSS?

override the styles

```css
.fontizer-wrapper {
}
.fontizer-button {
}
.fontizer-icon {
}
.fontizer-panel {
}
```
