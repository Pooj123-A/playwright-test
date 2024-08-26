
import { test, expect } from "@playwright/experimental-ct-react";
import App2026 from "./App2026.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2026 />);
  await expect(component).toContainText("Learn React");
});
