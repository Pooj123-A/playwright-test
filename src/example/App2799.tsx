
import { test, expect } from "@playwright/experimental-ct-react";
import App2799 from "./App2799.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2799 />);
  await expect(component).toContainText("Learn React");
});
