
import { test, expect } from "@playwright/experimental-ct-react";
import App1847 from "./App1847.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1847 />);
  await expect(component).toContainText("Learn React");
});
