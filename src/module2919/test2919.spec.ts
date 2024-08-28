
import { test, expect } from "@playwright/experimental-ct-react";
import App2919 from "./App2919.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2919 />);
  await expect(component).toContainText("Learn React");
});
