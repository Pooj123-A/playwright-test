
import { test, expect } from "@playwright/experimental-ct-react";
import App2025 from "./App2025.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2025 />);
  await expect(component).toContainText("Learn React");
});
