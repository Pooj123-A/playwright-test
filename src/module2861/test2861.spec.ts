
import { test, expect } from "@playwright/experimental-ct-react";
import App2861 from "./App2861.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2861 />);
  await expect(component).toContainText("Learn React");
});
