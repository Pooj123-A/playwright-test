
import { test, expect } from "@playwright/experimental-ct-react";
import App2748 from "./App2748.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2748 />);
  await expect(component).toContainText("Learn React");
});
