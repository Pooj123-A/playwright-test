
import { test, expect } from "@playwright/experimental-ct-react";
import App2582 from "./App2582.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2582 />);
  await expect(component).toContainText("Learn React");
});
