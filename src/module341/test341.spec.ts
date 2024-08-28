
import { test, expect } from "@playwright/experimental-ct-react";
import App341 from "./App341.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App341 />);
  await expect(component).toContainText("Learn React");
});
