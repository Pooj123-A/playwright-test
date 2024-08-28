
import { test, expect } from "@playwright/experimental-ct-react";
import App2340 from "./App2340.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2340 />);
  await expect(component).toContainText("Learn React");
});
