
import { test, expect } from "@playwright/experimental-ct-react";
import App2635 from "./App2635.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2635 />);
  await expect(component).toContainText("Learn React");
});
