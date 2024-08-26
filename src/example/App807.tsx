
import { test, expect } from "@playwright/experimental-ct-react";
import App807 from "./App807.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App807 />);
  await expect(component).toContainText("Learn React");
});
