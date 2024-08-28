
import { test, expect } from "@playwright/experimental-ct-react";
import App2612 from "./App2612.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2612 />);
  await expect(component).toContainText("Learn React");
});
