# nodoku-components

A set of reusable components to be used in the Nodoku static site generator.

## components

### HighlightedCode

the code highlighting components, based on highlight.js code highlighting library.

### ListComp

a component capable of presenting lists (unordered ```<ul></ul>``` and ordered ```<ol></ol>```)

## Usage

### Generating prefixed themes

the script to generate the prefixed CSS themes

```shell
npm run highlight.js-prefix
```

### Using the highlighting component

```tsx
import {NodokuComponents} from "nodoku-components";
import HighlightedCode = NodokuComponents.HighlightedCode;

<HighlightedCode language={"java"} code={codeSample} hljsTheme={theme}/>
```