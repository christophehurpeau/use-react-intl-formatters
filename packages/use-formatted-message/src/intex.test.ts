import { equal } from "node:assert/strict";
import { test } from "node:test";
// eslint-disable-next-line import/extensions
import { useFormattedMessage } from "./index.ts";

test("useFormattedMessage should be a function", () => {
  equal(typeof useFormattedMessage, "function");
});
