
import { test, expect } from "@playwright/experimental-ct-react";
import App2909 from "./App2909.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2909 />);
  await expect(component).toContainText("Learn React");
});
