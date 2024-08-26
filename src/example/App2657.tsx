
import { test, expect } from "@playwright/experimental-ct-react";
import App2657 from "./App2657.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2657 />);
  await expect(component).toContainText("Learn React");
});
