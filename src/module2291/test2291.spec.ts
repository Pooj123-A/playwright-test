
import { test, expect } from "@playwright/experimental-ct-react";
import App2291 from "./App2291.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2291 />);
  await expect(component).toContainText("Learn React");
});
