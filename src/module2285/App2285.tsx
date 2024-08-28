
import { test, expect } from "@playwright/experimental-ct-react";
import App2285 from "./App2285.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2285 />);
  await expect(component).toContainText("Learn React");
});
