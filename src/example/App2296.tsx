
import { test, expect } from "@playwright/experimental-ct-react";
import App2296 from "./App2296.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2296 />);
  await expect(component).toContainText("Learn React");
});
