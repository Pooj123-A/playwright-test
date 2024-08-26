
import { test, expect } from "@playwright/experimental-ct-react";
import App2532 from "./App2532.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2532 />);
  await expect(component).toContainText("Learn React");
});
