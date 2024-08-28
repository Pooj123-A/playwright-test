
import { test, expect } from "@playwright/experimental-ct-react";
import App2282 from "./App2282.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2282 />);
  await expect(component).toContainText("Learn React");
});