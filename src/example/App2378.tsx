
import { test, expect } from "@playwright/experimental-ct-react";
import App2378 from "./App2378.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2378 />);
  await expect(component).toContainText("Learn React");
});
