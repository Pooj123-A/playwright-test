
import { test, expect } from "@playwright/experimental-ct-react";
import App713 from "./App713.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App713 />);
  await expect(component).toContainText("Learn React");
});
