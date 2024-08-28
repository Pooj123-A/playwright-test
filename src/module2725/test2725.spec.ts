
import { test, expect } from "@playwright/experimental-ct-react";
import App2725 from "./App2725.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2725 />);
  await expect(component).toContainText("Learn React");
});
