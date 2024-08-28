
import { test, expect } from "@playwright/experimental-ct-react";
import App2294 from "./App2294.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2294 />);
  await expect(component).toContainText("Learn React");
});
