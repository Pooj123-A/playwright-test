
import { test, expect } from "@playwright/experimental-ct-react";
import App2198 from "./App2198.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2198 />);
  await expect(component).toContainText("Learn React");
});
