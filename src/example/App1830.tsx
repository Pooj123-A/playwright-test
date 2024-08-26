
import { test, expect } from "@playwright/experimental-ct-react";
import App1830 from "./App1830.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1830 />);
  await expect(component).toContainText("Learn React");
});
