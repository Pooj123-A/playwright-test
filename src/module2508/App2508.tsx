
import { test, expect } from "@playwright/experimental-ct-react";
import App2508 from "./App2508.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2508 />);
  await expect(component).toContainText("Learn React");
});
