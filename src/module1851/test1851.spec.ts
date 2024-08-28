
import { test, expect } from "@playwright/experimental-ct-react";
import App1851 from "./App1851.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1851 />);
  await expect(component).toContainText("Learn React");
});
