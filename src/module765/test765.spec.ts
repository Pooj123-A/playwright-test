
import { test, expect } from "@playwright/experimental-ct-react";
import App765 from "./App765.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App765 />);
  await expect(component).toContainText("Learn React");
});
