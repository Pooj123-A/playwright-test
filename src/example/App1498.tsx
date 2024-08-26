
import { test, expect } from "@playwright/experimental-ct-react";
import App1498 from "./App1498.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1498 />);
  await expect(component).toContainText("Learn React");
});