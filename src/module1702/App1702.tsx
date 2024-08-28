
import { test, expect } from "@playwright/experimental-ct-react";
import App1702 from "./App1702.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1702 />);
  await expect(component).toContainText("Learn React");
});
