
import { test, expect } from "@playwright/experimental-ct-react";
import App1842 from "./App1842.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1842 />);
  await expect(component).toContainText("Learn React");
});
