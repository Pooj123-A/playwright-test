
import { test, expect } from "@playwright/experimental-ct-react";
import App2913 from "./App2913.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2913 />);
  await expect(component).toContainText("Learn React");
});
