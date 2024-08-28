
import { test, expect } from "@playwright/experimental-ct-react";
import App687 from "./App687.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App687 />);
  await expect(component).toContainText("Learn React");
});
