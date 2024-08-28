
import { test, expect } from "@playwright/experimental-ct-react";
import App813 from "./App813.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App813 />);
  await expect(component).toContainText("Learn React");
});
