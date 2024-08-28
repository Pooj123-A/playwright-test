
import { test, expect } from "@playwright/experimental-ct-react";
import App2454 from "./App2454.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2454 />);
  await expect(component).toContainText("Learn React");
});
