
import { test, expect } from "@playwright/experimental-ct-react";
import App2765 from "./App2765.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2765 />);
  await expect(component).toContainText("Learn React");
});
