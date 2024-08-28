
import { test, expect } from "@playwright/experimental-ct-react";
import App2470 from "./App2470.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2470 />);
  await expect(component).toContainText("Learn React");
});
