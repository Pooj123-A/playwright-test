
import { test, expect } from "@playwright/experimental-ct-react";
import App2494 from "./App2494.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2494 />);
  await expect(component).toContainText("Learn React");
});
