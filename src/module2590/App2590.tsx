
import { test, expect } from "@playwright/experimental-ct-react";
import App2590 from "./App2590.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2590 />);
  await expect(component).toContainText("Learn React");
});
