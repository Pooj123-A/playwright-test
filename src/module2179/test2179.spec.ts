
import { test, expect } from "@playwright/experimental-ct-react";
import App2179 from "./App2179.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2179 />);
  await expect(component).toContainText("Learn React");
});
