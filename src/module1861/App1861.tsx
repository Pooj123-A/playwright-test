
import { test, expect } from "@playwright/experimental-ct-react";
import App1861 from "./App1861.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1861 />);
  await expect(component).toContainText("Learn React");
});
