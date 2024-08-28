
import { test, expect } from "@playwright/experimental-ct-react";
import App296 from "./App296.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App296 />);
  await expect(component).toContainText("Learn React");
});
