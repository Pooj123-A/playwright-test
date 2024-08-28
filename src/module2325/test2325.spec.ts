
import { test, expect } from "@playwright/experimental-ct-react";
import App2325 from "./App2325.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2325 />);
  await expect(component).toContainText("Learn React");
});
