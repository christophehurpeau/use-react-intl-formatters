import { equal } from "node:assert/strict";
import { test } from "node:test";
// eslint-disable-next-line import-x/extensions
import { useFormattedMessage } from "./index.ts";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
test("useFormattedMessage should be a function", () => {
  equal(typeof useFormattedMessage, "function");
});
