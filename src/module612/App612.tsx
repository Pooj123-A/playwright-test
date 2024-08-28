
import { test, expect } from "@playwright/experimental-ct-react";
import App612 from "./App612.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App612 />);
  await expect(component).toContainText("Learn React");
});
