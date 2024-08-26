
import { test, expect } from "@playwright/experimental-ct-react";
import App1630 from "./App1630.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1630 />);
  await expect(component).toContainText("Learn React");
});
