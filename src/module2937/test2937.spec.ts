
import { test, expect } from "@playwright/experimental-ct-react";
import App2937 from "./App2937.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2937 />);
  await expect(component).toContainText("Learn React");
});
