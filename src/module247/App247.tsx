
import { test, expect } from "@playwright/experimental-ct-react";
import App247 from "./App247.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App247 />);
  await expect(component).toContainText("Learn React");
});
