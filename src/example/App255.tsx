
import { test, expect } from "@playwright/experimental-ct-react";
import App255 from "./App255.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App255 />);
  await expect(component).toContainText("Learn React");
});
