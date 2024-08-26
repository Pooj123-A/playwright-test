
import { test, expect } from "@playwright/experimental-ct-react";
import App799 from "./App799.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App799 />);
  await expect(component).toContainText("Learn React");
});
