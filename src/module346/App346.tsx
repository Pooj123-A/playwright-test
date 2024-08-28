
import { test, expect } from "@playwright/experimental-ct-react";
import App346 from "./App346.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App346 />);
  await expect(component).toContainText("Learn React");
});
