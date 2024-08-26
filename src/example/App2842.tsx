
import { test, expect } from "@playwright/experimental-ct-react";
import App2842 from "./App2842.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2842 />);
  await expect(component).toContainText("Learn React");
});
