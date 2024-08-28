
import { test, expect } from "@playwright/experimental-ct-react";
import App2374 from "./App2374.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2374 />);
  await expect(component).toContainText("Learn React");
});
