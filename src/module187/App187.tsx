
import { test, expect } from "@playwright/experimental-ct-react";
import App187 from "./App187.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App187 />);
  await expect(component).toContainText("Learn React");
});
