
import { test, expect } from "@playwright/experimental-ct-react";
import App2403 from "./App2403.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2403 />);
  await expect(component).toContainText("Learn React");
});
