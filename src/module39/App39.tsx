
import { test, expect } from "@playwright/experimental-ct-react";
import App39 from "./App39.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App39 />);
  await expect(component).toContainText("Learn React");
});
