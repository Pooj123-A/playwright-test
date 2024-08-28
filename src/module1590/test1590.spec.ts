
import { test, expect } from "@playwright/experimental-ct-react";
import App1590 from "./App1590.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1590 />);
  await expect(component).toContainText("Learn React");
});
