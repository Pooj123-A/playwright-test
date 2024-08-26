
import { test, expect } from "@playwright/experimental-ct-react";
import App2389 from "./App2389.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2389 />);
  await expect(component).toContainText("Learn React");
});
