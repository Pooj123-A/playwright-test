
import { test, expect } from "@playwright/experimental-ct-react";
import App449 from "./App449.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App449 />);
  await expect(component).toContainText("Learn React");
});
