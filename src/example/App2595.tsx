
import { test, expect } from "@playwright/experimental-ct-react";
import App2595 from "./App2595.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2595 />);
  await expect(component).toContainText("Learn React");
});
