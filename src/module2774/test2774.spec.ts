
import { test, expect } from "@playwright/experimental-ct-react";
import App2774 from "./App2774.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2774 />);
  await expect(component).toContainText("Learn React");
});
