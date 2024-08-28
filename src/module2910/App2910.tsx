
import { test, expect } from "@playwright/experimental-ct-react";
import App2910 from "./App2910.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2910 />);
  await expect(component).toContainText("Learn React");
});
