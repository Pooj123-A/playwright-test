
import { test, expect } from "@playwright/experimental-ct-react";
import App755 from "./App755.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App755 />);
  await expect(component).toContainText("Learn React");
});
