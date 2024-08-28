
import { test, expect } from "@playwright/experimental-ct-react";
import App2024 from "./App2024.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2024 />);
  await expect(component).toContainText("Learn React");
});
