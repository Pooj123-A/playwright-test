
import { test, expect } from "@playwright/experimental-ct-react";
import App1834 from "./App1834.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1834 />);
  await expect(component).toContainText("Learn React");
});
