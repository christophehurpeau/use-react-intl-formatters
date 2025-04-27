<h1 align="center">
  use-formatted-message
</h1>

<p align="center">
  react-intl formatted message hook with use memo
</p>

<p align="center">
  <a href="https://npmjs.org/package/use-formatted-message"><img src="https://img.shields.io/npm/v/use-formatted-message.svg?style=flat-square" alt="npm version"></a>
  <a href="https://npmjs.org/package/use-formatted-message"><img src="https://img.shields.io/npm/dw/use-formatted-message.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://npmjs.org/package/use-formatted-message"><img src="https://img.shields.io/node/v/use-formatted-message.svg?style=flat-square" alt="node version"></a>
  <a href="https://npmjs.org/package/use-formatted-message"><img src="https://img.shields.io/npm/types/use-formatted-message.svg?style=flat-square" alt="types"></a>
  <a href="https://codecov.io/gh/christophehurpeau/use-react-intl-formatters"><img src="https://img.shields.io/codecov/c/github/christophehurpeau/use-react-intl-formatters/master.svg?style=flat-square"></a>
</p>

## Install

```bash
npm install --save use-formatted-message
```

## API

https://christophehurpeau.github.io/use-formatted-message/

## Why use this ?

This hook uses `useMemo` to avoid recall `intl.formatMessage` at each render, like `FormattedMessage` component.

## Usage

```js
import { defineMessages } from "react-intl";
import useFormattedMessage from "use-formatted-message";

const messages = defineMessages({
  title: {
    id: "some.key.title",
    defaultMessage: "This is the title content",
  },
  titleWithParams: {
    id: "some.key.titleWithParams",
    defaultMessage: "This is the title content, with {count}",
  },
});

function MyComponent({ count = 1 }) {
  const title = useFormattedMessage(messages.title);
  const titleWithParams = useFormattedMessage(
    messages.titleWithParams,
    { count },
    [count],
  );

  return (
    <div>
      <span title={title}>Hello</span>{" "}
      <span title={titleWithParams}>World</span>
    </div>
  );
}
```
