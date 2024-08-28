
import { test, expect } from "@playwright/experimental-ct-react";
import App2807 from "./App2807.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2807 />);
  await expect(component).toContainText("Learn React");
});
