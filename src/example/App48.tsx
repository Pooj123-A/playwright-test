
import { test, expect } from "@playwright/experimental-ct-react";
import App48 from "./App48.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App48 />);
  await expect(component).toContainText("Learn React");
});
