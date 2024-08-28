
import { test, expect } from "@playwright/experimental-ct-react";
import App2780 from "./App2780.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2780 />);
  await expect(component).toContainText("Learn React");
});
