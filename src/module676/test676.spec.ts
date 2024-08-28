
import { test, expect } from "@playwright/experimental-ct-react";
import App676 from "./App676.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App676 />);
  await expect(component).toContainText("Learn React");
});
