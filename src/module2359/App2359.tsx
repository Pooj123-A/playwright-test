
import { test, expect } from "@playwright/experimental-ct-react";
import App2359 from "./App2359.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2359 />);
  await expect(component).toContainText("Learn React");
});