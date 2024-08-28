
import { test, expect } from "@playwright/experimental-ct-react";
import App1909 from "./App1909.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1909 />);
  await expect(component).toContainText("Learn React");
});
