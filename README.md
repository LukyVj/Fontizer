# Fontizer

## Small react helper to let users handle your fonts display

### Usage

Start by adding these base values to your CSS :root element

```css
--base-font-size: 16px;
--base-font-weight: 300;
```

Then import and use Fontizer:

```javascript
import Fontizer from "fontizer";

// In your render

<Fontizer
  position={"bl"}
  callback={() => console.log('updated'))}
/>
```
