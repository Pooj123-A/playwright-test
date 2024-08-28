
import { test, expect } from "@playwright/experimental-ct-react";
import App2830 from "./App2830.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2830 />);
  await expect(component).toContainText("Learn React");
});
