
import { test, expect } from "@playwright/experimental-ct-react";
import App2524 from "./App2524.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2524 />);
  await expect(component).toContainText("Learn React");
});
