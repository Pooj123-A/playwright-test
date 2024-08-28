
import { test, expect } from "@playwright/experimental-ct-react";
import App499 from "./App499.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App499 />);
  await expect(component).toContainText("Learn React");
});
