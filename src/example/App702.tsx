
import { test, expect } from "@playwright/experimental-ct-react";
import App702 from "./App702.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App702 />);
  await expect(component).toContainText("Learn React");
});
