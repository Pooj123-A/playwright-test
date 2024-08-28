
import { test, expect } from "@playwright/experimental-ct-react";
import App2712 from "./App2712.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2712 />);
  await expect(component).toContainText("Learn React");
});
