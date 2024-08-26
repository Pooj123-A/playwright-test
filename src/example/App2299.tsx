
import { test, expect } from "@playwright/experimental-ct-react";
import App2299 from "./App2299.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2299 />);
  await expect(component).toContainText("Learn React");
});
