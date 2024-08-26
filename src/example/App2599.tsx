
import { test, expect } from "@playwright/experimental-ct-react";
import App2599 from "./App2599.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2599 />);
  await expect(component).toContainText("Learn React");
});
