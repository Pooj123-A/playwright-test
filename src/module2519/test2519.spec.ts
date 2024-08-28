
import { test, expect } from "@playwright/experimental-ct-react";
import App2519 from "./App2519.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2519 />);
  await expect(component).toContainText("Learn React");
});
