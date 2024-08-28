
import { test, expect } from "@playwright/experimental-ct-react";
import App2900 from "./App2900.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2900 />);
  await expect(component).toContainText("Learn React");
});
