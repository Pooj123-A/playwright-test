
import { test, expect } from "@playwright/experimental-ct-react";
import App2676 from "./App2676.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2676 />);
  await expect(component).toContainText("Learn React");
});
