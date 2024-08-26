
import { test, expect } from "@playwright/experimental-ct-react";
import App861 from "./App861.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App861 />);
  await expect(component).toContainText("Learn React");
});
