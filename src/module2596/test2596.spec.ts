
import { test, expect } from "@playwright/experimental-ct-react";
import App2596 from "./App2596.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2596 />);
  await expect(component).toContainText("Learn React");
});
