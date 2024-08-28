
import { test, expect } from "@playwright/experimental-ct-react";
import App508 from "./App508.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App508 />);
  await expect(component).toContainText("Learn React");
});
