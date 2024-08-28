
import { test, expect } from "@playwright/experimental-ct-react";
import App572 from "./App572.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App572 />);
  await expect(component).toContainText("Learn React");
});
