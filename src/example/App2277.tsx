
import { test, expect } from "@playwright/experimental-ct-react";
import App2277 from "./App2277.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2277 />);
  await expect(component).toContainText("Learn React");
});
