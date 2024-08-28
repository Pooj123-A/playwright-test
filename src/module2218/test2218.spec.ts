
import { test, expect } from "@playwright/experimental-ct-react";
import App2218 from "./App2218.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2218 />);
  await expect(component).toContainText("Learn React");
});
