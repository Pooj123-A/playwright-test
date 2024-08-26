
import { test, expect } from "@playwright/experimental-ct-react";
import App834 from "./App834.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App834 />);
  await expect(component).toContainText("Learn React");
});
