import { buildString } from "./main";

test("build Output", () => {
  expect(buildString("Hello")).toBe("Input is Hello");
});
