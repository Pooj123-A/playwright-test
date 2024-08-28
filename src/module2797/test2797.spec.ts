
import { test, expect } from "@playwright/experimental-ct-react";
import App2797 from "./App2797.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2797 />);
  await expect(component).toContainText("Learn React");
});
