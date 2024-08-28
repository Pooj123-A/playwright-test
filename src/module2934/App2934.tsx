
import { test, expect } from "@playwright/experimental-ct-react";
import App2934 from "./App2934.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2934 />);
  await expect(component).toContainText("Learn React");
});
