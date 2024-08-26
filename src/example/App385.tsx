
import { test, expect } from "@playwright/experimental-ct-react";
import App385 from "./App385.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App385 />);
  await expect(component).toContainText("Learn React");
});
