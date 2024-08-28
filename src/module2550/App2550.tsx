
import { test, expect } from "@playwright/experimental-ct-react";
import App2550 from "./App2550.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2550 />);
  await expect(component).toContainText("Learn React");
});
