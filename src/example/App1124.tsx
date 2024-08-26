
import { test, expect } from "@playwright/experimental-ct-react";
import App1124 from "./App1124.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1124 />);
  await expect(component).toContainText("Learn React");
});
