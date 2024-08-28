
import { test, expect } from "@playwright/experimental-ct-react";
import App2853 from "./App2853.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2853 />);
  await expect(component).toContainText("Learn React");
});
