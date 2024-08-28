
import { test, expect } from "@playwright/experimental-ct-react";
import App814 from "./App814.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App814 />);
  await expect(component).toContainText("Learn React");
});
