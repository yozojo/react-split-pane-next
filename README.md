# React Split Pane Next

## Developed based on React Split Pane(https://github.com/tomkp/react-split-pane).

Split-Pane React component, can be nested or split vertically or horizontally!

**I'm working on an updated version of this library, and looking for help:**

Demo

http://react-split-pane-v2.surge.sh/

Install

```sh
npm install react-split-pane-next

# or if you use yarn

yarn add react-split-pane-next
```

Usage

```jsx
import SplitPane, { Pane } from 'react-split-pane-next';

<SplitPane split="vertical">
  <Pane initialSize="200px">You can use a Pane component</Pane>
  <div>or you can use a plain old div</div>
  <Pane initialSize="25%" minSize="10%" maxSize="500px">
    Using a Pane allows you to specify any constraints directly
  </Pane>
</SplitPane>;
```

