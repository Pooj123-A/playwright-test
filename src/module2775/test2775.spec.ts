
import { test, expect } from "@playwright/experimental-ct-react";
import App2775 from "./App2775.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2775 />);
  await expect(component).toContainText("Learn React");
});
