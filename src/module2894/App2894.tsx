
import { test, expect } from "@playwright/experimental-ct-react";
import App2894 from "./App2894.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2894 />);
  await expect(component).toContainText("Learn React");
});
